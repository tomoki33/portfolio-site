"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

export default function WorksSection() {
  const { t, pick } = useLang();

  return (
    <section id="works" style={{ padding: "var(--space-8) 0", borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
        <p style={{ margin: 0, flex: "0 0 132px", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
          {t.k_works}
        </p>
        <h2 style={{ flex: "1 1 220px", fontWeight: 400, fontSize: "clamp(28px, 4vw, 38px)", lineHeight: 1.15 }}>
          {t.h_works}
        </h2>
        <p style={{ margin: 0, flex: "1 1 200px", fontSize: 13, lineHeight: 1.6, color: "var(--color-neutral-600)", textWrap: "pretty" }}>
          {t.works_note}
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "var(--space-4)" }}>
        {profile.works.map((w, i) => (
          <div key={i} className="card" style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)", padding: "var(--space-4)" }}>
            {!w.placeholder ? (
              <div>
                <p style={{ margin: "0 0 var(--space-1)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent-700)", fontFeatureSettings: "'tnum'" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 style={{ fontWeight: 500, fontSize: 21, lineHeight: 1.25 }}>{pick(w.title)}</h3>
                <p style={{ margin: "var(--space-2) 0 0", fontSize: 13.5, lineHeight: 1.68, color: "var(--color-neutral-800)", textWrap: "pretty" }}>
                  {pick(w.blurb)}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 6, marginTop: "var(--space-3)" }}>
                  {(w.stack ?? []).map((s) => (
                    <span key={s} className="tag tag-outline" style={{ fontSize: 10.5 }}>
                      {s}
                    </span>
                  ))}
                </div>
                <p style={{ margin: "var(--space-3) 0 0", fontSize: 12.5 }}>
                  <a href={w.url ?? "#works"} target="_blank" rel="noopener">
                    {t.open} ↗
                  </a>
                </p>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    height: 132,
                    border: "1px dashed var(--color-neutral-400)",
                    borderRadius: "var(--radius-md)",
                    background: "repeating-linear-gradient(135deg, var(--color-neutral-200) 0 7px, var(--color-bg) 7px 14px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "var(--space-3)",
                  }}
                >
                  <p style={{ margin: 0, font: "400 10.5px/1.5 ui-monospace, Menlo, monospace", letterSpacing: ".06em", color: "var(--color-neutral-700)", textAlign: "center" }}>
                    {pick(w.hint)}
                  </p>
                </div>
                <p style={{ margin: "var(--space-3) 0 0", fontFamily: "var(--font-cormorant), var(--font-shippori-mincho), serif", fontSize: 18, color: "var(--color-neutral-600)" }}>
                  {pick(w.slot)}
                </p>
                <p style={{ margin: "var(--space-1) 0 0", font: "400 10.5px/1.6 ui-monospace, Menlo, monospace", color: "var(--color-neutral-500)" }}>
                  src/data/profile.ts → works
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
