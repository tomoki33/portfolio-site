"use client";

import { useLang } from "@/components/LangContext";
import Header from "./Header";
import Hero from "./Hero";
import NowSection from "./NowSection";
import AboutSection from "./AboutSection";
import CareerSection from "./CareerSection";
import SkillsSection from "./SkillsSection";
import WorksSection from "./WorksSection";
import WritingSection from "./WritingSection";
import ReadingSection from "./ReadingSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function PortfolioPage() {
  const { lang } = useLang();

  return (
    <div lang={lang} style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <Header />
      <main id="top" style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px) var(--space-8)" }}>
        <Hero />
        <NowSection />
        <AboutSection />
        <CareerSection />
        <SkillsSection />
        <WorksSection />
        <WritingSection />
        <ReadingSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
