import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { apiKey, cards, question, spread } = await req.json();

    if (!apiKey || typeof apiKey !== "string") {
      return NextResponse.json({ error: "請提供 OpenAI API Key" }, { status: 400 });
    }

    if (!cards || !Array.isArray(cards) || cards.length === 0) {
      return NextResponse.json({ error: "缺少牌面資料" }, { status: 400 });
    }

    const cardDescriptions = cards
      .map((c: { name: string; en: string; position?: string; isReversed: boolean; upright: string; reversed: string; desc: string; love: string; career: string; advice: string }) => {
        const tone = c.isReversed ? "逆位" : "正位";
        const keywords = c.isReversed ? c.reversed : c.upright;
        return `【${c.position || "指引"}】${c.name}（${c.en}）— ${tone}\n關鍵字：${keywords}\n牌義：${c.desc}\n感情面：${c.love}\n事業面：${c.career}\n建議：${c.advice}`;
      })
      .join("\n\n");

    const spreadName = spread === "three" ? "過去・現在・未來三張牌陣" : "單張指引牌陣";

    const systemPrompt = `你是一位專業且有深度的塔羅占卜師，名為「罡之鍊金術師」。你的風格是溫暖但不浮誇，有洞察力但不武斷。你擅長用簡潔而有力的語言給出直覺式的解讀。

解讀規則：
1. 先用一句話給出整體方向感（像是核心訊息）
2. 再針對每張牌做 2-3 句的深入解讀，結合提問者的問題
3. 如果是三張牌陣，要注意過去→現在→未來的脈絡串聯
4. 最後給一段溫暖但務實的總結建議
5. 語氣保持神秘感但不做作，像是一個智慧長者在跟你對話
6. 不要用太多驚嘆號，保持沉穩
7. 全程使用繁體中文
8. 回覆控制在 300-500 字左右`;

    const userPrompt = `提問者的問題：${question || "（未輸入具體問題，請給予整體指引）"}

使用牌陣：${spreadName}

抽出的牌：
${cardDescriptions}

請根據以上牌面，為提問者進行一次完整的塔羅解讀。`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.8,
        max_tokens: 800,
        stream: true
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const msg =
        response.status === 401
          ? "API Key 無效，請檢查後重試"
          : response.status === 429
            ? "請求過於頻繁，請稍後再試"
            : `OpenAI 錯誤：${(errorData as { error?: { message?: string } }).error?.message || response.statusText}`;
      return NextResponse.json({ error: msg }, { status: response.status });
    }

    // Stream the response back
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive"
      }
    });
  } catch (err) {
    return NextResponse.json(
      { error: "伺服器錯誤，請稍後再試" },
      { status: 500 }
    );
  }
}
