import { DrawnCard, MAJOR_ARCANA, TarotCardData, ReadingRecord } from "./tarot-data";

export type SpreadType = "single" | "three";

const REVERSED_PROBABILITY = 0.35;

export const SPREAD_LABELS: Record<SpreadType, string[]> = {
  single: ["指引"],
  three: ["過去", "現在", "未來"]
};

export const SPREAD_NAMES: Record<SpreadType, string> = {
  single: "單張指引",
  three: "時間之流"
};

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
  return { ...card, isReversed: Math.random() < REVERSED_PROBABILITY, position };
}

export function drawCards(spread: SpreadType): DrawnCard[] {
  const count = spread === "single" ? 1 : 3;
  const labels = SPREAD_LABELS[spread];
  const deck = partialShuffle(MAJOR_ARCANA, count);
  return deck.map((card, i) => drawOne(card, labels[i]));
}

export function cardKeywords(card: DrawnCard): string {
  return card.isReversed ? card.reversed : card.upright;
}

export function cardTone(card: DrawnCard): string {
  return card.isReversed ? "逆位" : "正位";
}

export function generateSummary(cards: DrawnCard[], question: string): string {
  if (cards.length === 1) {
    const c = cards[0];
    const tone = c.isReversed ? "逆位" : "正位";
    return `關於你的提問，${c.name}（${tone}）指出：${c.coreSummary}${c.isReversed ? "但現階段可能需要留意反向的課題。" : ""}`;
  }
  const past = cards[0];
  const present = cards[1];
  const future = cards[2];
  return `這次牌面顯示，你的過去受到「${past.name}」的影響，現在正處於「${present.name}」的能量之中，而未來則指向「${future.name}」的方向。${present.isReversed ? "當下的課題需要特別關注，" : ""}整體來看，這是一個從${past.coreSummary.slice(0, 6)}走向${future.coreSummary.slice(0, 6)}的過程。`;
}

const HISTORY_KEY = "tarot-mystic-history";
const MAX_HISTORY = 20;

export function saveReading(question: string, spread: SpreadType, cards: DrawnCard[]): void {
  try {
    const record: ReadingRecord = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      question,
      spread,
      cards: cards.map(c => ({ name: c.name, isReversed: c.isReversed, position: c.position })),
      timestamp: Date.now()
    };
    const existing = getHistory();
    existing.unshift(record);
    if (existing.length > MAX_HISTORY) existing.length = MAX_HISTORY;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(existing));
  } catch {}
}

export function getHistory(): ReadingRecord[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
