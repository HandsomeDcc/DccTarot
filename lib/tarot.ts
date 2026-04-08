import { DrawnCard, MAJOR_ARCANA, TarotCardData } from "./tarot-data";

export type SpreadType = "single" | "three";

/** 逆位出現的機率（0–1），參考傳統塔羅牌陣慣例設定 */
const REVERSED_PROBABILITY = 0.35;

export const SPREAD_LABELS: Record<SpreadType, string[]> = {
  single: ["指引"],
  three: ["過去", "現在", "未來"]
};

/** Fisher-Yates partial shuffle：只洗前 count 張即停 */
function partialShuffle<T>(array: T[], count: number): T[] {
  const result = [...array];
  const limit = Math.min(count, result.length);
  for (let i = 0; i < limit; i += 1) {
    const j = i + Math.floor(Math.random() * (result.length - i));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result.slice(0, limit);
}

function drawOne(card: TarotCardData, position?: string): DrawnCard {
  return {
    ...card,
    isReversed: Math.random() < REVERSED_PROBABILITY,
    position
  };
}

export function drawCards(spread: SpreadType): DrawnCard[] {
  const count = spread === "single" ? 1 : 3;
  const labels = SPREAD_LABELS[spread];
  const deck = partialShuffle(MAJOR_ARCANA, count);
  return deck.map((card, index) => drawOne(card, labels[index]));
}

export function cardKeywords(card: DrawnCard): string {
  return card.isReversed ? card.reversed : card.upright;
}

export function cardTone(card: DrawnCard): string {
  return card.isReversed ? "逆位" : "正位";
}
