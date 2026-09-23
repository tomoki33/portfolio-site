"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LangContext";
import { NAV_KEYS, SHEETS } from "@/lib/i18n";

export default function Nav() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand">TM</Link>
        <div className="nav-links">
          {NAV_KEYS.map((key) => {
            const s = SHEETS.find((x) => x.key === key)!;
            return (
              <Link key={key} href={s.href} aria-current={pathname === s.href ? "page" : undefined}>
                {s.title.toUpperCase()}
              </Link>
            );
          })}
        </div>
        <div className="lang-toggle" role="group" aria-label="Language">
          <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          <button type="button" aria-pressed={lang === "ja"} onClick={() => setLang("ja")}>JA</button>
        </div>
        <a className="resume-btn" href="/api/resume" target="_blank" rel="noreferrer">RESUME ↗</a>
      </div>
    </nav>
  );
}
