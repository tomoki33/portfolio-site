"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";

export default function Footer() {
  const { lang, t } = useLang();
  const { meta } = profile;
  const footerName = lang === "ja" ? `${meta.name.ja} · ${meta.nameRoman}` : `${meta.nameRoman} · ${meta.name.ja}`;

  return (
    <footer
      style={{
        padding: "var(--space-6) 0",
        borderTop: "1px solid var(--color-divider)",
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-3)",
        justifyContent: "space-between",
        fontSize: 11.5,
        letterSpacing: ".06em",
        color: "var(--color-neutral-500)",
      }}
    >
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} {footerName}</p>
      <p style={{ margin: 0, fontFeatureSettings: "'tnum'" }}>{t.footer_note}</p>
    </footer>
  );
}
