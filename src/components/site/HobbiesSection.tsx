"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

export default function HobbiesSection() {
  const { t, pick } = useLang();

  return (
    <section id="hobbies" style={{ padding: "var(--space-8) 0", borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
        <p style={{ margin: 0, flex: "0 0 132px", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
          {t.k_hobbies}
        </p>
        <h2 style={{ flex: "1 1 220px", fontWeight: 400, fontSize: "clamp(28px, 4vw, 38px)", lineHeight: 1.15 }}>
          {t.h_hobbies}
        </h2>
        <p style={{ margin: 0, flex: "1 1 220px", fontFamily: "var(--font-lora), serif", fontStyle: "italic", fontSize: 14.5, lineHeight: 1.6, color: "var(--color-neutral-700)" }}>
          {pick(profile.hobbies.note)}
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "var(--space-4)" }}>
        {profile.hobbies.items.map((h, i) => (
          <div key={i} style={{ borderTop: "1px solid var(--color-divider)", paddingTop: "var(--space-3)", minWidth: 0 }}>
            {!h.placeholder ? (
              <div>
                <p style={{ margin: 0, fontFamily: "var(--font-cormorant), var(--font-shippori-mincho), serif", fontSize: 18, lineHeight: 1.35 }}>
                  {pick(h.title)}
                </p>
                {h.text && (
                  <p style={{ margin: "var(--space-2) 0 0", fontSize: 13, lineHeight: 1.66, color: "var(--color-neutral-700)" }}>
                    {pick(h.text)}
                  </p>
                )}
              </div>
            ) : (
              <p style={{ margin: 0, font: "400 11px/1.7 ui-monospace, Menlo, monospace", letterSpacing: ".04em", color: "var(--color-neutral-600)" }}>
                {pick(h.hint)}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
