"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

export default function SkillsSection() {
  const { t, pick } = useLang();

  return (
    <section id="skills" style={{ padding: "var(--space-8) 0", borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
        <p style={{ margin: 0, flex: "0 0 132px", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
          {t.k_skills}
        </p>
        <h2 style={{ flex: "1 1 260px", fontWeight: 400, fontSize: "clamp(28px, 4vw, 38px)", lineHeight: 1.15 }}>
          {t.h_skills}
        </h2>
      </div>
      {profile.skills.map((g, i) => (
        <div key={i} style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", padding: "var(--space-3) 0", borderTop: "1px solid var(--color-divider)" }}>
          <p style={{ margin: 0, flex: "0 0 132px", fontFamily: "var(--font-cormorant), var(--font-shippori-mincho), serif", fontSize: 17, lineHeight: 1.5, color: "var(--color-neutral-800)" }}>
            {pick(g.group)}
          </p>
          <div style={{ flex: "1 1 380px", display: "flex", flexWrap: "wrap", alignItems: "flex-start", alignContent: "flex-start", gap: 6, minWidth: 0 }}>
            {g.items.map((s) => (
              <span key={s} className="tag tag-neutral" style={{ fontSize: 11.5 }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
