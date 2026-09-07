"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

export default function AboutSection() {
  const { t, pick } = useLang();

  return (
    <section id="about" style={{ padding: "var(--space-8) 0", borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>
        <p style={{ margin: 0, flex: "0 0 132px", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
          {t.k_about}
        </p>
        <div style={{ flex: "1 1 420px", minWidth: 0 }}>
          <h2 style={{ margin: "0 0 var(--space-4)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 38px)", lineHeight: 1.15 }}>
            {t.h_about}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 15.5,
              lineHeight: 1.85,
              textAlign: "justify",
              textJustify: "inter-character",
              hyphens: "auto",
              letterSpacing: ".01em",
            }}
          >
            {pick(profile.meta.summary)}
          </p>
        </div>
      </div>
    </section>
  );
}
