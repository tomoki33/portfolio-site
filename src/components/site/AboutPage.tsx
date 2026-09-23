"use client";

import { useLang } from "@/components/LangContext";
import Header from "./Header";
import ReadingSection from "./ReadingSection";
import ValuesSection from "./ValuesSection";
import HobbiesSection from "./HobbiesSection";
import Footer from "./Footer";

export default function AboutPage() {
  const { lang, t } = useLang();

  const nav = [
    { href: "#reading", label: t.nav_reading },
    { href: "#values", label: t.nav_values },
    { href: "#hobbies", label: t.nav_hobbies },
    { href: "/", label: t.back_home },
  ];

  return (
    <div lang={lang} style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <Header brandHref="/" nav={nav} />
      <main id="top" style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px) var(--space-8)" }}>
        <div style={{ padding: "clamp(40px, 8vw, 88px) 0 var(--space-6)" }}>
          <p style={{ margin: "0 0 var(--space-3)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent-700)" }}>
            {t.k_personal}
          </p>
          <h1 style={{ margin: 0, fontWeight: 400, fontSize: "clamp(36px, 6vw, 56px)", lineHeight: 1.1 }}>
            {t.h_personal}
          </h1>
          <p style={{ margin: "var(--space-4) 0 0", fontSize: 15.5, lineHeight: 1.75, maxWidth: "36em", color: "var(--color-neutral-800)" }}>
            {t.personal_teaser}
          </p>
        </div>
        <ReadingSection />
        <ValuesSection />
        <HobbiesSection />
        <Footer />
      </main>
    </div>
  );
}
