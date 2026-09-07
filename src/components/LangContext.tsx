"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Lang, Localized } from "@/lib/types";
import { pick, translations, type Translations } from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  pick: (value: Localized | null | undefined) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({
  defaultLang = "ja",
  children,
}: {
  defaultLang?: Lang;
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      t: translations[lang],
      pick: (value) => pick(value, lang),
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
