"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

export default function ValuesSection() {
  const { t, pick } = useLang();

  return (
    <section id="values" style={{ padding: "var(--space-8) 0", borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
        <p style={{ margin: 0, flex: "0 0 132px", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
          {t.k_values}
        </p>
        <h2 style={{ flex: "1 1 220px", fontWeight: 400, fontSize: "clamp(28px, 4vw, 38px)", lineHeight: 1.15 }}>
          {t.h_values}
        </h2>
        <p style={{ margin: 0, flex: "1 1 220px", fontFamily: "var(--font-lora), serif", fontStyle: "italic", fontSize: 14.5, lineHeight: 1.6, color: "var(--color-neutral-700)" }}>
          {pick(profile.values.note)}
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "var(--space-4)" }}>
        {profile.values.items.map((v, i) => (
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
            <p style={{ margin: "0 0 var(--space-1)", fontFamily: "var(--font-cormorant), var(--font-shippori-mincho), serif", fontWeight: 500, fontSize: 18, lineHeight: 1.35 }}>
              {pick(v.title)}
            </p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--color-neutral-800)", textWrap: "pretty" }}>
              {pick(v.text)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
