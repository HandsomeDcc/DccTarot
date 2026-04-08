import { DrawnCard } from "@/lib/tarot-data";
import { cardTone } from "@/lib/tarot";

type Props = {
  cards: DrawnCard[];
};

export default function ReadingPanel({ cards }: Props) {
  return (
    <section className="reading-panel fade-in">
      <h2>本次解讀</h2>

      <div className="reading-list">
        {cards.map((card, index) => (
          <article key={`reading-${index}`} className="reading-item">
            <div className="reading-title-wrap">
              <div>
                <p className="reading-position">{card.position}</p>
                <h3>
                  {card.name}・{cardTone(card)}
                </h3>
              </div>
              <span className="reading-symbol">{card.symbol}</span>
            </div>

            <p className="reading-desc">{card.desc}</p>

            <div className="reading-grid">
              <div>
                <h4>感情</h4>
                <p>{card.love}</p>
              </div>
              <div>
                <h4>事業</h4>
                <p>{card.career}</p>
              </div>
              <div>
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
