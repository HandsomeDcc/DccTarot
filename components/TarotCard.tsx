import { DrawnCard, Element } from "@/lib/tarot-data";
import { cardKeywords, cardTone } from "@/lib/tarot";

type Props = {
  card: DrawnCard;
};

const elementLabel: Record<Element, string> = {
  fire: "火",
  water: "水",
  earth: "土",
  air: "風"
};

export default function TarotCard({ card }: Props) {
  return (
    <article
      className={`tarot-card fade-in ${card.isReversed ? "reversed" : ""}`}
      style={
        {
          "--card-main": card.color,
          "--card-accent": card.accent
        } as React.CSSProperties
      }
    >
      <div className="card-frame">
        <div className="card-header">
          <span className="card-id">{String(card.id).padStart(2, "0")}</span>
          <span className="card-element">{elementLabel[card.element]}</span>
        </div>

        <div className={`card-orbit ${card.isReversed ? "orbit-reversed" : ""}`}>
          <div className="card-star star-1" />
          <div className="card-star star-2" />
          <div className="card-star star-3" />
          <div className="card-sigil">{card.symbol}</div>
          <div className="card-halo" />
        </div>

        <div className="card-body">
          <h3>{card.name}</h3>
          <p className="card-en">{card.en}</p>
          <p className="card-tone">{cardTone(card)}</p>
          <p className="card-keywords">{cardKeywords(card)}</p>
        </div>
      </div>
    </article>
  );
}
