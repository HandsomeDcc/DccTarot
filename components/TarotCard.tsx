import { DrawnCard, Element } from "@/lib/tarot-data";
import { cardKeywords, cardTone } from "@/lib/tarot";
import CardArt from "./CardArt";

type Props = { card: DrawnCard };

const elementLabel: Record<Element, string> = {
  fire: "火", water: "水", earth: "土", air: "風"
};

export default function TarotCard({ card }: Props) {
  const tone = cardTone(card);

  return (
    <article className={`tarot-card ${card.isReversed ? "reversed" : ""}`}>
      <div className="card-outer-frame">
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

          {/* Renaissance illustration area */}
          <div className={`card-art-area ${card.isReversed ? "art-reversed" : ""}`}>
            <CardArt id={card.id} className="card-art-svg" />
          </div>

          {/* Text area */}
          <div className="card-text-area">
            <h3 className="card-name">{card.name}</h3>
            <p className="card-en">{card.en}</p>
            <p className={`card-tone-badge ${card.isReversed ? "tone-reversed" : ""}`}>
              {tone}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
