"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

export default function WritingSection() {
  const { t, pick } = useLang();

  return (
    <section id="writing" style={{ padding: "var(--space-8) 0", borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
        <p style={{ margin: 0, flex: "0 0 132px", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
          {t.k_writing}
        </p>
        <h2 style={{ flex: "1 1 220px", fontWeight: 400, fontSize: "clamp(28px, 4vw, 38px)", lineHeight: 1.15 }}>
          {t.h_writing}
        </h2>
        <a className="btn btn-ghost" href={profile.articles.source} target="_blank" rel="noopener" style={{ fontSize: 12.5, padding: "6px 12px" }}>
          {t.zenn_all} ↗
        </a>
      </div>
      {profile.articles.items.map((a, i) => (
        <div key={i} style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "var(--space-3)", padding: "var(--space-3) 0", borderTop: "1px solid var(--color-divider)" }}>
          <p style={{ margin: 0, flex: "0 0 34px", fontFamily: "var(--font-cormorant), serif", fontSize: 15, color: "var(--color-accent-700)", fontFeatureSettings: "'tnum'" }}>
            {String(i + 1).padStart(2, "0")}
          </p>
          {!a.placeholder ? (
            <p style={{ margin: 0, flex: "1 1 320px", fontSize: 15, lineHeight: 1.55, minWidth: 0 }}>
              <a href={a.url ?? profile.articles.source} target="_blank" rel="noopener">
                {a.title}
              </a>
            </p>
          ) : (
            <p
              style={{
                margin: 0,
                flex: "1 1 320px",
                minWidth: 0,
                font: "400 11px/1.6 ui-monospace, Menlo, monospace",
                letterSpacing: ".04em",
                color: "var(--color-neutral-600)",
                borderBottom: "1px dashed var(--color-neutral-400)",
                paddingBottom: 3,
              }}
            >
              {pick(a.hint)}
            </p>
          )}
          <p style={{ margin: 0, flex: "0 0 auto", fontSize: 12, letterSpacing: ".06em", color: "var(--color-neutral-500)", fontFeatureSettings: "'tnum'" }}>
            {a.date ? a.date.replace(/-/g, ".") : "—"}
          </p>
        </div>
      ))}
    </section>
  );
}
