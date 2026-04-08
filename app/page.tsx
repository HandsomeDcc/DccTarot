"use client";

import { useState, useCallback, useEffect } from "react";
import TarotCard from "@/components/TarotCard";
import ReadingPanel from "@/components/ReadingPanel";
import SpreadSelector from "@/components/SpreadSelector";
import { drawCards, SpreadType, generateSummary, saveReading } from "@/lib/tarot";
import { DrawnCard } from "@/lib/tarot-data";

type Phase = "home" | "ritual" | "reveal" | "result";

export default function HomePage() {
  const [phase, setPhase] = useState<Phase>("home");
  const [spread, setSpread] = useState<SpreadType>("single");
  const [question, setQuestion] = useState("");
  const [cards, setCards] = useState<DrawnCard[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<Set<number>>(new Set());
  const [showReading, setShowReading] = useState(false);
  const [summary, setSummary] = useState("");

  const startRitual = useCallback(() => {
    const drawn = drawCards(spread);
    setCards(drawn);
    setFlippedIndexes(new Set());
    setShowReading(false);
    setSummary("");
    setPhase("ritual");

    // Ritual sequence: show card backs, then transition to reveal
    setTimeout(() => {
      setPhase("reveal");
    }, 2400);
  }, [spread]);

  const flipCard = useCallback((index: number) => {
    setFlippedIndexes(prev => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  // When all cards are flipped, show reading after delay
  useEffect(() => {
    if (phase === "reveal" && flippedIndexes.size === cards.length && cards.length > 0) {
      const s = generateSummary(cards, question);
      setSummary(s);
      saveReading(question || "未輸入提問", spread, cards);
      const timer = setTimeout(() => {
        setPhase("result");
        setTimeout(() => setShowReading(true), 600);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [flippedIndexes, cards, phase, question, spread]);

  const reset = useCallback((keepQuestion = false) => {
    setPhase("home");
    setCards([]);
    setFlippedIndexes(new Set());
    setShowReading(false);
    setSummary("");
    if (!keepQuestion) setQuestion("");
  }, []);

  return (
    <main className="page-shell">
      {/* Ambient background */}
      <div className="cosmic-bg" aria-hidden="true">
        <div className="star-field">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="floating-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
              }}
            />
          ))}
        </div>
        <div className="ambient-glow glow-1" />
        <div className="ambient-glow glow-2" />
      </div>

      {/* ── PHASE: HOME ──────────────────────────── */}
      {phase === "home" && (
        <div className="phase-container fade-in">
          <section className="hero">
            <p className="eyebrow">Celestial Luxe Tarot</p>
            <h1>罡之鍊金術師</h1>
            <p className="hero-subtitle">在星辰與符號之間，聆聽屬於你的訊息</p>
          </section>

          <section className="question-section">
            <label className="question-label" htmlFor="question-input">
              你此刻最想釐清的是什麼？
            </label>
            <div className="question-input-wrap">
              <input
                id="question-input"
                type="text"
                className="question-input"
                placeholder="例如：我接下來是否該轉職？"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                maxLength={100}
              />
            </div>
          </section>

          <SpreadSelector spread={spread} setSpread={setSpread} />

          <section className="cta-section">
            <button className="cta-button" onClick={startRitual}>
              <span className="cta-glow" />
              <span className="cta-text">開始抽牌</span>
            </button>
          </section>
        </div>
      )}

      {/* ── PHASE: RITUAL (shuffle animation) ──── */}
      {phase === "ritual" && (
        <div className="phase-container fade-in">
          <section className="ritual-section">
            <p className="ritual-text">洗牌中⋯</p>
            <div className="ritual-deck">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className="ritual-card-back"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="card-back-inner">
                    <div className="card-back-pattern">
                      <div className="card-back-diamond" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="ritual-hint">靜心感受⋯</p>
          </section>
        </div>
      )}

      {/* ── PHASE: REVEAL (flip cards) ────────── */}
      {(phase === "reveal" || phase === "result") && (
        <div className="phase-container fade-in">
          {question && (
            <p className="result-question">
              關於「<span className="gold-text">{question}</span>」
            </p>
          )}

          <section className={`cards-area cards-${cards.length}`}>
            {cards.map((card, index) => (
              <div key={`${card.id}-${index}`} className="card-slot">
                <p className="slot-label">{card.position}</p>
                <div
                  className={`flip-container ${flippedIndexes.has(index) ? "flipped" : ""}`}
                  onClick={() => phase === "reveal" && flipCard(index)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flip-inner">
                    <div className="flip-front">
                      <div className="card-back-display">
                        <div className="card-back-inner">
                          <div className="card-back-pattern">
                            <div className="card-back-diamond" />
                          </div>
                        </div>
                        {phase === "reveal" && !flippedIndexes.has(index) && (
                          <p className="tap-hint">點擊翻牌</p>
                        )}
                      </div>
                    </div>
                    <div className="flip-back">
                      <TarotCard card={card} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Core summary */}
          {phase === "result" && summary && (
            <section className="summary-section fade-blur-in">
              <div className="summary-card">
                <div className="summary-ornament">✦</div>
                <p className="summary-text">{summary}</p>
                <div className="summary-ornament">✦</div>
              </div>
            </section>
          )}

          {/* Deep reading */}
          {phase === "result" && showReading && (
            <ReadingPanel cards={cards} />
          )}

          {/* Action buttons */}
          {phase === "result" && showReading && (
            <section className="action-section fade-blur-in">
              <button className="action-btn" onClick={() => { reset(true); }}>
                再抽一次
              </button>
              <button className="action-btn secondary" onClick={() => { reset(false); }}>
                回到提問
              </button>
            </section>
          )}
        </div>
      )}
    </main>
  );
}
