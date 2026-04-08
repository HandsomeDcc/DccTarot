import { SpreadType, SPREAD_NAMES } from "@/lib/tarot";

type Props = {
  spread: SpreadType;
  setSpread: (s: SpreadType) => void;
};

const spreads: { key: SpreadType; desc: string }[] = [
  { key: "single", desc: "一張牌，一個方向" },
  { key: "three", desc: "過去・現在・未來" }
];

export default function SpreadSelector({ spread, setSpread }: Props) {
  return (
    <section className="spread-section">
      <p className="spread-label">選擇牌陣</p>
      <div className="spread-options">
        {spreads.map(s => (
          <button
            key={s.key}
            className={`spread-option ${spread === s.key ? "active" : ""}`}
            onClick={() => setSpread(s.key)}
          >
            <span className="spread-name">{SPREAD_NAMES[s.key]}</span>
            <span className="spread-desc">{s.desc}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
