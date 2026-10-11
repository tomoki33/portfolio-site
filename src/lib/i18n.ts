import type { Lang, Localized } from "@/lib/types";

/** Resolve a Localized value to a plain string for the given language. */
export function pick(value: Localized | null | undefined, lang: Lang): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value.ja ?? value.en ?? "";
}

/** "YYYY-MM" -> "YYYY.MM" */
export function ym(s: string | null | undefined): string {
  if (!s) return "";
  const [y, m] = s.split("-");
  return `${y}.${m}`;
}

export const LANG_COOKIE = "lang";

/**
 * The drawing set. Titles stay English in both languages (they are drawing
 * labels); only the sub-label and preview switch.
 */
export const SHEETS = [
  { key: "now", href: "/now", title: "In progress", sub: { en: "NOW", ja: "いま" }, preview: { en: "What I am building this quarter.", ja: "いま取り組んでいること。" }, flag: "★ LIVE" },
  { key: "career", href: "/career", title: "Elevation", sub: { en: "CAREER", ja: "経歴" }, preview: { en: "Retail sales → full-stack engineering.", ja: "営業 → フルスタックエンジニア。" }, flag: "" },
  { key: "works", href: "/works", title: "Figures", sub: { en: "WORKS", ja: "制作物" }, preview: { en: "PLATE, ReSwing, ReSurf, Morning Bytes, Karada Log.", ja: "PLATE・ReSwing・ReSurf・Morning Bytes・からだログ。" }, flag: "" },
  { key: "writing", href: "/writing", title: "Notes", sub: { en: "WRITING", ja: "書いたもの" }, preview: { en: "Articles on Zenn.", ja: "Zenn の記事。" }, flag: "" },
  { key: "reading", href: "/reading", title: "Materials", sub: { en: "READING", ja: "読んでいるもの" }, preview: { en: "Books I have read.", ja: "読んできた本。" }, flag: "" },
  { key: "interests", href: "/interests", title: "Details", sub: { en: "INTERESTS", ja: "趣味・関心" }, preview: { en: "Surf, lift, golf, coffee.", ja: "サーフィン・筋トレ・ゴルフ・コーヒー。" }, flag: "" },
  { key: "contact", href: "/contact", title: "Contact", sub: { en: "CONTACT", ja: "連絡" }, preview: { en: "Contract work, chats, shop talk.", ja: "業務委託・カジュアル面談など。" }, flag: "" },
] as const;

export type SheetKey = (typeof SHEETS)[number]["key"];

export const NAV_KEYS: SheetKey[] = ["career", "works", "writing", "reading", "interests", "contact"];

/** Total sheet count including home, e.g. "08". */
export const SHEET_TOTAL = String(SHEETS.length + 1).padStart(2, "0");

/** "02" for index 0 (home is sheet 01). */
export function sheetNo(key: SheetKey): string {
  return String(SHEETS.findIndex((s) => s.key === key) + 2).padStart(2, "0");
}

export const translations = {
  en: {
    matSub: "WHAT I READ",
    contact: "Contract work, casual chats, or just talking shop — all welcome.",
    tags: { ft: "FULL-TIME", side: "CONTRACT", now: "CURRENT", sales: "FULL-TIME" },
    scope: "SCOPE",
    screenshot: "SCREENSHOT",
  },
  ja: {
    matSub: "読んでいるもの",
    contact: "業務委託のご相談、カジュアル面談、技術の雑談、いずれも歓迎です。",
    tags: { ft: "正社員", side: "業務委託", now: "現在", sales: "正社員" },
    scope: "業務内容",
    screenshot: "SCREENSHOT",
  },
} as const satisfies Record<Lang, Record<string, unknown>>;

export type Translations = (typeof translations)[Lang];
