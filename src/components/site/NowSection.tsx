"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

export default function NowSection() {
  const { t, pick } = useLang();
  const updated = profile.now.updated.replace("-", ".");

  return (
    <section id="now" style={{ padding: "var(--space-8) 0", borderTop: "1px solid var(--color-divider)" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          gap: "var(--space-4)",
          marginBottom: "var(--space-6)",
        }}
      >
        <p
          style={{
            margin: 0,
            flex: "0 0 132px",
            fontSize: 11,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--color-accent-700)",
            fontFeatureSettings: "'tnum'",
          }}
        >
          {t.k_now}
        </p>
        <h2 style={{ flex: "1 1 260px", fontWeight: 400, fontSize: "clamp(28px, 4vw, 38px)", lineHeight: 1.15 }}>
          {t.h_now}
        </h2>
        <p style={{ margin: 0, fontSize: 11.5, letterSpacing: ".1em", color: "var(--color-neutral-500)", fontFeatureSettings: "'tnum'" }}>
          {updated}
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "var(--space-4)" }}>
        {profile.now.items.map((n, i) => (
          <div
            key={i}
            style={{
              borderTop: "1px solid color-mix(in srgb, var(--color-accent) 55%, transparent)",
              paddingTop: "var(--space-3)",
              minWidth: 0,
            }}
          >
            <p style={{ margin: "0 0 var(--space-2)", fontFamily: "var(--font-cormorant), serif", fontSize: 15, color: "var(--color-accent-700)", fontFeatureSettings: "'tnum'" }}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.68, textWrap: "pretty" }}>{pick(n)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
