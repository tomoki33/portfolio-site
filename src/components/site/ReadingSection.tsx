"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

export default function ReadingSection() {
  const { t, pick } = useLang();

  return (
    <section id="reading" style={{ padding: "var(--space-8) 0", borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
        <p style={{ margin: 0, flex: "0 0 132px", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
          {t.k_reading}
        </p>
        <h2 style={{ flex: "1 1 220px", fontWeight: 400, fontSize: "clamp(28px, 4vw, 38px)", lineHeight: 1.15 }}>
          {t.h_reading}
        </h2>
        <p style={{ margin: 0, flex: "1 1 220px", fontFamily: "var(--font-lora), serif", fontStyle: "italic", fontSize: 14.5, lineHeight: 1.6, color: "var(--color-neutral-700)" }}>
          {pick(profile.reading.note)}
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "var(--space-4)" }}>
        {profile.reading.items.map((r, i) => (
          <div key={i} style={{ borderTop: "1px solid var(--color-divider)", paddingTop: "var(--space-3)", minWidth: 0 }}>
            {!r.placeholder ? (
              <div style={{ display: "flex", gap: "var(--space-3)" }}>
                <div
                  style={{
                    flex: "0 0 52px",
                    width: 52,
                    aspectRatio: "2 / 3",
                    border: "1px solid var(--color-divider)",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    background: r.coverUrl ? "var(--color-neutral-200)" : "transparent",
                  }}
                >
                  {r.coverUrl && (
                    // eslint-disable-next-line @next/next/no-img-element -- external/local cover images of varying sizes, no optimization needed
                    <img
                      src={r.coverUrl}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  )}
                </div>
                <div style={{ minWidth: 0, flex: "1 1 auto" }}>
                  <p style={{ margin: 0, fontFamily: "var(--font-cormorant), var(--font-shippori-mincho), serif", fontSize: 18, lineHeight: 1.35 }}>
                    {r.url ? (
                      <a href={r.url} target="_blank" rel="noopener">
                        {r.title}
                      </a>
                    ) : (
                      r.title
                    )}
                  </p>
                  <p style={{ margin: "var(--space-2) 0 0", fontSize: 13, lineHeight: 1.66, color: "var(--color-neutral-700)" }}>
                    {pick(r.note)}
                  </p>
                </div>
              </div>
            ) : (
              <p style={{ margin: 0, font: "400 11px/1.7 ui-monospace, Menlo, monospace", letterSpacing: ".04em", color: "var(--color-neutral-600)" }}>
                {pick(r.hint)}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
