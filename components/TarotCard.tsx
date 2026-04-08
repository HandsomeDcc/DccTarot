import { DrawnCard, Element } from "@/lib/tarot-data";
import { cardKeywords, cardTone } from "@/lib/tarot";

type Props = { card: DrawnCard };

const elementLabel: Record<Element, string> = {
  fire: "火", water: "水", earth: "土", air: "風"
};

export default function TarotCard({ card }: Props) {
  const tone = cardTone(card);

  return (
    <article className={`tarot-card ${card.isReversed ? "reversed" : ""}`}>
      {/* Outer gold frame */}
      <div className="card-outer-frame">
        {/* Inner frame */}
        <div className="card-inner-frame">
          {/* Corner ornaments */}
          <span className="corner-ornament tl">✧</span>
          <span className="corner-ornament tr">✧</span>
          <span className="corner-ornament bl">✧</span>
          <span className="corner-ornament br">✧</span>

          {/* Header */}
          <div className="card-header">
            <span className="card-id">{String(card.id).padStart(2, "0")}</span>
            <span className="card-element">{elementLabel[card.element]}</span>
          </div>

          {/* Symbol area */}
          <div className={`card-symbol-area ${card.isReversed ? "symbol-reversed" : ""}`}>
            <div className="symbol-ring" />
            <div className="symbol-ring ring-2" />
            <div className="card-sigil">{card.symbol}</div>
            {/* Subtle geometric pattern */}
            <div className="geo-line geo-1" />
            <div className="geo-line geo-2" />
            <div className="geo-line geo-3" />
          </div>

          {/* Text area */}
          <div className="card-text-area">
            <h3 className="card-name">{card.name}</h3>
            <p className="card-en">{card.en}</p>
            <p className={`card-tone-badge ${card.isReversed ? "tone-reversed" : ""}`}>
              {tone}
            </p>
            <p className="card-keywords">{cardKeywords(card)}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
