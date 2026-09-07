"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";
import Portrait from "./Portrait";

export default function Hero() {
  const { lang, t, pick } = useLang();
  const { meta } = profile;
  const heroName = lang === "ja" ? meta.name.ja : meta.nameRoman;
  const heroAltName = lang === "ja" ? meta.nameRoman : meta.name.ja;
  const years = Math.max(1, new Date().getFullYear() - meta.since);

  return (
    <section
      style={{
        padding: "clamp(40px, 8vw, 96px) 0 var(--space-8)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
        gap: "clamp(24px, 4vw, 56px)",
        alignItems: "start",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <p
          style={{
            margin: "0 0 var(--space-3)",
            fontSize: 11,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--color-accent-700)",
            fontFeatureSettings: "'tnum'",
          }}
        >
          {t.hero_kicker}
        </p>
        <h1
          style={{
            fontWeight: 400,
            fontSize: "clamp(46px, 8.5vw, 88px)",
            lineHeight: 0.96,
            letterSpacing: "-.015em",
          }}
        >
          {heroName}
        </h1>
        <p
          style={{
            margin: "var(--space-3) 0 0",
            fontFamily: "var(--font-cormorant), var(--font-shippori-mincho), serif",
            fontSize: 19,
            letterSpacing: ".1em",
            color: "var(--color-neutral-600)",
          }}
        >
          {heroAltName}
        </p>
        <div style={{ height: 1, background: "var(--color-accent)", opacity: 0.5, margin: "var(--space-6) 0", maxWidth: 72 }} />
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, letterSpacing: ".02em", color: "var(--color-neutral-800)" }}>
          {pick(meta.role)}
          <span style={{ color: "var(--color-neutral-500)" }}> · </span>
          {pick(meta.location)}
          <span style={{ color: "var(--color-neutral-500)" }}> · </span>
          {t.yearsFmt(years)}
        </p>
        <p
          style={{
            margin: "var(--space-4) 0 0",
            fontFamily: "var(--font-lora), serif",
            fontStyle: "italic",
            fontSize: 19,
            lineHeight: 1.62,
            maxWidth: "32em",
            textWrap: "pretty",
          }}
        >
          {pick(meta.tagline)}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-6)" }}>
          {meta.links.map((l) => (
            <a
              key={l.url}
              className="btn btn-secondary"
              href={l.url}
              target="_blank"
              rel="noopener"
              style={{ fontSize: 13, padding: "8px 14px" }}
            >
              {l.label}
              <span style={{ opacity: 0.55, marginLeft: 7, fontSize: 11.5 }}>{l.handle}</span>
            </a>
          ))}
        </div>
      </div>
      <div style={{ minWidth: 0 }}>
        <Portrait />
      </div>
    </section>
  );
}
