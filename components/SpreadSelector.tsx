import { SpreadType } from "@/lib/tarot";

type Props = {
  spread: SpreadType;
  setSpread: (spread: SpreadType) => void;
  onDraw: () => void;
  hasDrawn: boolean;
};

export default function SpreadSelector({ spread, setSpread, onDraw, hasDrawn }: Props) {
  return (
    <section className="selector-panel">
      <div className="selector-tabs">
        <button
          className={spread === "single" ? "active" : ""}
          onClick={() => setSpread("single")}
        >
          單張指引
        </button>
        <button
          className={spread === "three" ? "active" : ""}
          onClick={() => setSpread("three")}
        >
          三張牌陣
        </button>
      </div>

      <button className="draw-button" onClick={onDraw}>
        {hasDrawn ? "重新抽牌" : "抽牌"}
      </button>
    </section>
  );
}
