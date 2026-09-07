/**
 * Shared content types for the profile data.
 *
 * A `Localized<T>` value is either a plain string (same in both languages)
 * or an { ja, en } pair. Use `pick(value, lang)` (see i18n.ts) to resolve it.
 */
export type Lang = "ja" | "en";

export type Localized = string | { ja: string; en: string };

export interface LinkItem {
  label: string;
  handle: string;
  url: string;
}

export interface NowItem {
  ja: string;
  en: string;
}

export interface CareerBullet {
  ja: string;
  en: string;
}

export interface CareerItem {
  org: Localized;
  employment: Localized;
  title: Localized;
  /** "YYYY-MM" */
  from: string;
  /** "YYYY-MM", or null for "present" */
  to: string | null;
  summary: Localized;
  bullets: CareerBullet[];
  stack: string[];
}

export interface SkillGroup {
  group: Localized;
  items: string[];
}

export interface WorkItem {
  placeholder?: boolean;
  title?: Localized;
  blurb?: Localized;
  url?: string;
  stack?: string[];
  slot?: Localized;
  hint?: Localized;
}

export interface ArticleItem {
  placeholder?: boolean;
  title?: string;
  url?: string;
  /** "YYYY-MM-DD" */
  date?: string;
  hint?: Localized;
}

export interface ReadingItem {
  placeholder?: boolean;
  title?: string;
  note?: Localized;
  hint?: Localized;
  /** Link to the book (publisher page, store, Zenn book, etc.) */
  url?: string;
  /** Cover image — a full URL, or a local path such as "/covers/xxx.jpg" */
  coverUrl?: string;
}

export interface ValueItem {
  title: Localized;
  text: Localized;
}

export interface HobbyItem {
  placeholder?: boolean;
  title?: Localized;
  text?: Localized;
  hint?: Localized;
}

export interface EducationItem {
  school: Localized;
  from: string;
  to: string;
}

export interface CertificationItem {
  name: Localized;
  /** "YYYY-MM" */
  date: string;
}

export interface ProfileMeta {
  handle: string;
  name: { ja: string; en: string };
  nameRoman: string;
  role: Localized;
  location: Localized;
  /** Year the engineering career started — used to compute years of experience. */
  since: number;
  tagline: Localized;
  summary: Localized;
  links: LinkItem[];
  contact: {
    email: string;
    note: Localized;
  };
}

export interface Profile {
  meta: ProfileMeta;
  now: {
    /** "YYYY-MM" */
    updated: string;
    items: NowItem[];
  };
  career: CareerItem[];
  skills: SkillGroup[];
  works: WorkItem[];
  articles: {
    source: string;
    items: ArticleItem[];
  };
  reading: {
    note: Localized;
    items: ReadingItem[];
  };
  values: {
    note: Localized;
    items: ValueItem[];
  };
  hobbies: {
    note: Localized;
    items: HobbyItem[];
  };
  education: EducationItem[];
  certifications: CertificationItem[];
}
