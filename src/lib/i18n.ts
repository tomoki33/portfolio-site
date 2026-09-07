import type { Lang, Localized } from "@/lib/types";

/** Resolve a Localized value to a plain string for the given language. */
export function pick(value: Localized | null | undefined, lang: Lang): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value.ja ?? value.en ?? "";
}

/** "YYYY-MM" -> "YYYY.MM" (site) or "YYYY年M月" (résumé, handled separately). */
export function ym(s: string | null | undefined): string {
  if (!s) return "";
  const [y, m] = s.split("-");
  return `${y}.${m}`;
}

export const translations = {
  ja: {
    nav_now: "いま",
    nav_career: "経歴",
    nav_skills: "スキル",
    nav_works: "制作物",
    nav_writing: "書いたもの",
    nav_contact: "連絡",
    resume_btn: "職務経歴書",
    resume_long: "職務経歴書を見る / PDF",
    hero_kicker: "Full-stack Engineer",
    k_now: "Now",
    h_now: "現在の取り組み",
    k_about: "About",
    h_about: "得意分野",
    k_career: "Career",
    h_career: "経歴",
    k_skills: "Skills",
    h_skills: "スキル",
    k_works: "Works",
    h_works: "制作物",
    works_note: "個人開発・OSS・実験。掲載したいものを src/data/profile.ts に書けばここに並びます。",
    k_writing: "Writing",
    h_writing: "書いたもの",
    zenn_all: "Zenn で全記事",
    k_reading: "Reading",
    h_reading: "読んでいるもの",
    k_values: "Values",
    h_values: "大事にしていること",
    k_hobbies: "Interests",
    h_hobbies: "趣味・関心",
    k_contact: "Contact",
    h_contact: "ご連絡ください",
    open: "見る",
    footer_note: "src/data/profile.ts を編集すれば更新されます",
    present: "現在",
    yearsFmt: (n: number) => `エンジニア歴 ${n}年`,
  },
  en: {
    nav_now: "Now",
    nav_career: "Career",
    nav_skills: "Skills",
    nav_works: "Works",
    nav_writing: "Writing",
    nav_contact: "Contact",
    resume_btn: "Résumé",
    resume_long: "Read the résumé / PDF",
    hero_kicker: "Full-stack Engineer",
    k_now: "Now",
    h_now: "What I'm doing now",
    k_about: "About",
    h_about: "What I do",
    k_career: "Career",
    h_career: "Career",
    k_skills: "Skills",
    h_skills: "Skills",
    k_works: "Works",
    h_works: "Works",
    works_note: "Side projects, OSS and experiments. Anything listed in src/data/profile.ts lands here.",
    k_writing: "Writing",
    h_writing: "Writing",
    zenn_all: "All posts on Zenn",
    k_reading: "Reading",
    h_reading: "What I'm reading",
    k_values: "Values",
    h_values: "What I value",
    k_hobbies: "Interests",
    h_hobbies: "Hobbies & interests",
    k_contact: "Contact",
    h_contact: "Let's talk",
    open: "Open",
    footer_note: "Built from one editable data file — src/data/profile.ts",
    present: "Present",
    yearsFmt: (n: number) => `${n} years as an engineer`,
  },
} as const satisfies Record<Lang, Record<string, unknown>>;

export type Translations = (typeof translations)[Lang];
