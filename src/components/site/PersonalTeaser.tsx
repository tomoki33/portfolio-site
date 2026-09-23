"use client";

import { useLang } from "@/components/LangContext";

/**
 * Compact link-out to the /about page (Values / Hobbies / Reading).
 * Keeps the home page career-focused and scannable — the personal side
 * gets its own page to write into at length instead of stretching this
 * one.
 */
export default function PersonalTeaser() {
  const { t } = useLang();

  return (
    <section style={{ padding: "var(--space-8) 0", borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "var(--space-4)" }}>
        <p style={{ margin: 0, flex: "0 0 132px", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
          {t.k_personal}
        </p>
        <h2 style={{ flex: "0 1 auto", fontWeight: 400, fontSize: "clamp(24px, 3.4vw, 30px)", lineHeight: 1.2 }}>
          {t.h_personal}
        </h2>
        <p style={{ margin: 0, flex: "1 1 260px", fontSize: 13.5, lineHeight: 1.6, color: "var(--color-neutral-700)" }}>
          {t.personal_teaser}
        </p>
        <a className="btn btn-secondary" href="/about" style={{ flex: "0 0 auto", fontSize: 12.5, padding: "7px 13px", whiteSpace: "nowrap" }}>
          {t.personal_cta} →
        </a>
      </div>
    </section>
  );
}
