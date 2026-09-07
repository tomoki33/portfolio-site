"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

const NAV = [
  { href: "#now", key: "nav_now" as const },
  { href: "#career", key: "nav_career" as const },
  { href: "#skills", key: "nav_skills" as const },
  { href: "#works", key: "nav_works" as const },
  { href: "#writing", key: "nav_writing" as const },
  { href: "#contact", key: "nav_contact" as const },
];

export default function Header() {
  const { lang, setLang, t, pick } = useLang();
  const navName = pick(profile.meta.name);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "color-mix(in srgb, var(--color-bg) 92%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "var(--space-3) clamp(20px, 5vw, 56px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "var(--space-4)",
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-cormorant), var(--font-shippori-mincho), serif",
            fontSize: 19,
            letterSpacing: ".02em",
            color: "var(--color-text)",
            textDecoration: "none",
            flex: "0 0 auto",
          }}
        >
          {navName}
        </a>
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-4)",
            flex: "1 1 260px",
            fontSize: 12.5,
            letterSpacing: ".04em",
          }}
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} style={{ color: "var(--color-neutral-700)" }}>
              {t[n.key]}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flex: "0 0 auto" }}>
          <div
            style={{
              display: "flex",
              border: "1px solid var(--color-divider)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              fontFeatureSettings: "'tnum'",
            }}
          >
            <button
              type="button"
              onClick={() => setLang("ja")}
              style={{
                border: 0,
                padding: "5px 10px",
                font: "400 11.5px/1 var(--font-lora), serif",
                letterSpacing: ".08em",
                cursor: "pointer",
                background: lang === "ja" ? "var(--color-accent-100)" : "transparent",
                color: lang === "ja" ? "var(--color-accent-700)" : "var(--color-neutral-600)",
              }}
            >
              JA
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              style={{
                border: 0,
                borderLeft: "1px solid var(--color-divider)",
                padding: "5px 10px",
                font: "400 11.5px/1 var(--font-lora), serif",
                letterSpacing: ".08em",
                cursor: "pointer",
                background: lang === "en" ? "var(--color-accent-100)" : "transparent",
                color: lang === "en" ? "var(--color-accent-700)" : "var(--color-neutral-600)",
              }}
            >
              EN
            </button>
          </div>
          <a
            className="btn btn-primary"
            href="/api/resume"
            target="_blank"
            rel="noopener"
            style={{ fontSize: 12.5, padding: "7px 13px", whiteSpace: "nowrap" }}
          >
            {t.resume_btn}
          </a>
        </div>
      </div>
    </header>
  );
}
