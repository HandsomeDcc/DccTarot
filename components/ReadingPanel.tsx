import { DrawnCard } from "@/lib/tarot-data";
import { cardTone, cardKeywords } from "@/lib/tarot";

type Props = { cards: DrawnCard[] };

export default function ReadingPanel({ cards }: Props) {
  return (
    <section className="reading-panel fade-blur-in">
      <div className="reading-divider">
        <span className="divider-line" />
        <span className="divider-text">深度解讀</span>
        <span className="divider-line" />
      </div>

      <div className="reading-list">
        {cards.map((card, index) => (
          <article
            key={`reading-${index}`}
            className="reading-item"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="reading-header">
              <div>
                <p className="reading-position">{card.position}</p>
                <h3 className="reading-card-name">
                  {card.name}
                  <span className={`reading-tone ${card.isReversed ? "tone-reversed" : ""}`}>
                    {cardTone(card)}
                  </span>
                </h3>
              </div>
              <span className="reading-symbol">{card.symbol}</span>
            </div>

            <p className="reading-keywords">{cardKeywords(card)}</p>
            <p className="reading-desc">{card.desc}</p>

            <div className="reading-grid">
              <div className="reading-cell">
                <h4>感情</h4>
                <p>{card.love}</p>
              </div>
              <div className="reading-cell">
                <h4>事業</h4>
                <p>{card.career}</p>
              </div>
              <div className="reading-cell">
                <h4>建議</h4>
                <p>{card.advice}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
