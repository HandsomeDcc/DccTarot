"use client";

import { useState } from "react";
import ReadingPanel from "@/components/ReadingPanel";
import SpreadSelector from "@/components/SpreadSelector";
import TarotCard from "@/components/TarotCard";
import { drawCards, SpreadType } from "@/lib/tarot";
import { DrawnCard } from "@/lib/tarot-data";

export default function HomePage() {
  const [spread, setSpread] = useState<SpreadType>("single");
  const [cards, setCards] = useState<DrawnCard[]>([]);

  const title = spread === "single" ? "單張指引" : "過去・現在・未來";

  function handleDraw() {
    setCards(drawCards(spread));
  }

  return (
    <main className="page-shell">
      <div className="cosmic-bg" />

      <section className="hero">
        <p className="eyebrow">Mystic Tarot</p>
        <h1>原創塔羅抽牌網站</h1>
        <p className="hero-copy">
          不使用外部塔羅圖片，以自製視覺語言呈現大阿爾克那的象徵世界。
        </p>

        <SpreadSelector
          spread={spread}
          setSpread={setSpread}
          onDraw={handleDraw}
          hasDrawn={cards.length > 0}
        />
      </section>

      <section className="cards-section">
        <div className="section-head">
          <h2>{title}</h2>
          <p>依照偉特系塔羅結構進行抽牌與正逆位解讀。</p>
        </div>

        {cards.length === 0 ? (
          <div className="empty-state">
            <div className="deck-back">
              <div className="deck-inner">✦</div>
            </div>
            <p>點擊「抽牌」開始本次占卜。</p>
          </div>
        ) : (
          <div className={`cards-grid cards-${cards.length}`}>
            {cards.map((card, index) => (
              <div key={`slot-${index}`} className="card-slot">
                <p className="slot-label">{card.position}</p>
                <TarotCard card={card} />
              </div>
            ))}
          </div>
        )}
      </section>

      {cards.length > 0 && <ReadingPanel cards={cards} />}
    </main>
  );
}
