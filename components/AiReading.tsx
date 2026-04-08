"use client";

import { useState, useCallback } from "react";
import { DrawnCard } from "@/lib/tarot-data";
import { SpreadType } from "@/lib/tarot";

type Props = {
  cards: DrawnCard[];
  question: string;
  spread: SpreadType;
  apiKey: string;
};

export default function AiReading({ cards, question, spread, apiKey }: Props) {
  const [reading, setReading] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [requested, setRequested] = useState(false);

  const fetchReading = useCallback(async () => {
    if (!apiKey) {
      setError("請先在首頁輸入 OpenAI API Key");
      return;
    }

    setLoading(true);
    setError("");
    setReading("");
    setRequested(true);

    try {
      const payload = {
        apiKey,
        question,
        spread,
        cards: cards.map(c => ({
          name: c.name,
          en: c.en,
          position: c.position,
          isReversed: c.isReversed,
          upright: c.upright,
          reversed: c.reversed,
          desc: c.desc,
          love: c.love,
          career: c.career,
          advice: c.advice
        }))
      };

      const res = await fetch("/api/reading", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: "未知錯誤" }));
        setError(data.error || `請求失敗 (${res.status})`);
        setLoading(false);
        return;
      }

      // Parse SSE stream
      const reader = res.body?.getReader();
      if (!reader) {
        setError("無法建立串流連線");
        setLoading(false);
        return;
      }

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              setReading(prev => prev + content);
            }
          } catch {
            // skip malformed chunks
          }
        }
      }
    } catch (err) {
      setError("連線失敗，請檢查網路或 API Key");
    } finally {
      setLoading(false);
    }
  }, [apiKey, cards, question, spread]);

  if (!requested) {
    return (
      <section className="ai-section fade-blur-in">
        <div className="ai-divider">
          <span className="divider-line" />
          <span className="divider-text">AI 深度解讀</span>
          <span className="divider-line" />
        </div>
        <div className="ai-prompt-card">
          <p className="ai-prompt-text">
            想要更深入、更個人化的解讀嗎？
          </p>
          <button
            className="ai-trigger-btn"
            onClick={fetchReading}
            disabled={!apiKey}
          >
            {apiKey ? "啟動 AI 解讀" : "請先輸入 API Key"}
          </button>
          {!apiKey && (
            <p className="ai-hint">回到首頁設定 OpenAI API Key 後即可使用</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="ai-section fade-blur-in">
      <div className="ai-divider">
        <span className="divider-line" />
        <span className="divider-text">AI 深度解讀</span>
        <span className="divider-line" />
      </div>

      <div className="ai-reading-card">
        {error ? (
          <div className="ai-error">
            <p>{error}</p>
            <button className="ai-retry-btn" onClick={fetchReading}>
              重新嘗試
            </button>
          </div>
        ) : (
          <>
            <div className="ai-reading-content">
              {reading.split("\n").map((line, i) =>
                line.trim() ? <p key={i}>{line}</p> : <br key={i} />
              )}
              {loading && <span className="ai-cursor" />}
            </div>
            {!loading && reading && (
              <p className="ai-powered">Powered by GPT-4o-mini</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
