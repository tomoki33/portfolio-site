"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

export default function ContactSection() {
  const { t, pick } = useLang();
  const { contact, links } = profile.meta;
  const hasEmail = !!contact.email;

  return (
    <section id="contact" style={{ padding: "var(--space-8) 0 var(--space-6)", borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 340px", minWidth: 0 }}>
          <p style={{ margin: "0 0 var(--space-3)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
            {t.k_contact}
          </p>
          <h2 style={{ margin: "0 0 var(--space-3)", fontWeight: 400, fontSize: "clamp(30px, 5vw, 46px)", lineHeight: 1.1 }}>
            {t.h_contact}
          </h2>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, maxWidth: "30em", textWrap: "pretty" }}>{pick(contact.note)}</p>
        </div>
        <div style={{ flex: "0 1 300px", display: "flex", flexDirection: "column", gap: "var(--space-2)", minWidth: 0 }}>
          {hasEmail && (
            <a className="btn btn-primary btn-block" href={`mailto:${contact.email}`} style={{ fontSize: 13.5 }}>
              {contact.email}
            </a>
          )}
          {links.map((l) => (
            <a
              key={l.url}
              className="btn btn-secondary btn-block"
              href={l.url}
              target="_blank"
              rel="noopener"
              style={{ fontSize: 13, justifyContent: "space-between" }}
            >
              {l.label}
              <span style={{ opacity: 0.55, fontSize: 11 }}>{l.handle}</span>
            </a>
          ))}
          <a className="btn btn-ghost btn-block" href="/api/resume" target="_blank" rel="noopener" style={{ fontSize: 13 }}>
            {t.resume_long} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
