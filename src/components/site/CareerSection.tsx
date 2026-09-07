"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";
import { ym } from "@/lib/i18n";

export default function CareerSection() {
  const { t, pick } = useLang();

  return (
    <section id="career" style={{ padding: "var(--space-8) 0", borderTop: "1px solid var(--color-divider)" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          gap: "var(--space-4)",
          marginBottom: "var(--space-6)",
        }}
      >
        <p style={{ margin: 0, flex: "0 0 132px", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
          {t.k_career}
        </p>
        <h2 style={{ flex: "1 1 220px", fontWeight: 400, fontSize: "clamp(28px, 4vw, 38px)", lineHeight: 1.15 }}>
          {t.h_career}
        </h2>
        <a className="btn btn-ghost" href="/api/resume" target="_blank" rel="noopener" style={{ fontSize: 12.5, padding: "6px 12px" }}>
          {t.resume_long}
        </a>
      </div>

      {profile.career.map((c, i) => (
        <article key={i} style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", padding: "var(--space-6) 0", borderTop: "1px solid var(--color-divider)" }}>
          <div style={{ flex: "0 0 132px", minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, letterSpacing: ".04em", color: "var(--color-neutral-700)", fontFeatureSettings: "'tnum'" }}>
              {ym(c.from)} — {c.to ? ym(c.to) : t.present}
            </p>
            <p style={{ margin: "var(--space-1) 0 0", fontSize: 11, letterSpacing: ".1em", color: "var(--color-neutral-500)" }}>
              {pick(c.employment)}
            </p>
          </div>
          <div style={{ flex: "1 1 380px", minWidth: 0 }}>
            <h3 style={{ fontWeight: 500, fontSize: 23, lineHeight: 1.25 }}>{pick(c.org)}</h3>
            <p style={{ margin: "var(--space-1) 0 var(--space-3)", fontSize: 13.5, letterSpacing: ".02em", color: "var(--color-accent-700)" }}>
              {pick(c.title)}
            </p>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.78, color: "var(--color-neutral-800)", textWrap: "pretty" }}>
              {pick(c.summary)}
            </p>
            <ul style={{ listStyle: "none", margin: "var(--space-3) 0 0", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
              {c.bullets.map((b, bi) => (
                <li key={bi} style={{ display: "flex", gap: "var(--space-2)", fontSize: 13.5, lineHeight: 1.68 }}>
                  <span style={{ color: "var(--color-accent)", flex: "0 0 auto" }}>—</span>
                  <span style={{ minWidth: 0 }}>{pick(b)}</span>
                </li>
              ))}
            </ul>
            {c.stack.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 6, marginTop: "var(--space-3)" }}>
                {c.stack.map((s) => (
                  <span key={s} className="tag tag-outline" style={{ fontSize: 11 }}>
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
