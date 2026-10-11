"use client";

import Link from "next/link";
import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";
import { SHEETS, SHEET_TOTAL, sheetNo } from "@/lib/i18n";

const LAYERS = [
  { y: 20, label: "L5 DOMAIN", tech: "Finance — securities, banking" },
  { y: 88, label: "L4 INTERFACE", tech: "Next.js · React · TypeScript" },
  { y: 156, label: "L3 SERVICE", tech: "FastAPI · Python · Prisma" },
  { y: 224, label: "L2 DATA", tech: "DocumentDB · DynamoDB · MongoDB" },
  { y: 292, label: "L1 INFRA", tech: "AWS · GCP · Azure · Terraform" },
];
const ANNOT_TOPS = ["9.27%", "25.85%", "42.44%", "59.02%", "75.61%"];
const LETTERS = ["A", "B", "C", "D", "E"];

export default function Home() {
  const { pick } = useLang();
  const { meta } = profile;
  const years = new Date().getFullYear() - meta.since;

  return (
    <>
      <section className="hero" data-screen-label="01 Section">
        <div className="hero-head">
          <div className="meta-row">
            <span>01 / {SHEET_TOTAL} · SECTION A–A · URAYASU, JP</span>
            <span className="meta-links">
              {["GitHub", "Zenn", "LinkedIn"].map((label) => {
                const l = meta.links.find((x) => x.label === label)!;
                return (
                  <a key={label} href={l.url} target="_blank" rel="noreferrer">
                    {label.toUpperCase()} ↗
                  </a>
                );
              })}
            </span>
          </div>
          <h1>{meta.name.en}</h1>
          <p className="lead">{pick(meta.lead)}</p>
        </div>

        <div className="stack-drawing">
          <svg viewBox="0 0 1120 410" fill="#1a1c1a" role="img" aria-label="Stack section drawing: domain, interface, service, data and infrastructure layers, with AI agents and RAG across all layers">
            <defs>
              <pattern id="hx" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#1a1c1a" strokeWidth=".6" />
              </pattern>
            </defs>
            <g stroke="#1a1c1a" fill="#f3f4f1">
              {LAYERS.map((l, i) => (
                <rect key={l.y} x="60" y={l.y} width="580" height="68" fill={i === 4 ? "url(#hx)" : undefined} />
              ))}
            </g>
            <rect x="66" y="300" width="340" height="52" fill="#f3f4f1" />
            <g fontSize="10.5" letterSpacing="1.2" fill="#8a8c88">
              {LAYERS.map((l) => (
                <text key={l.y} x="84" y={l.y + 26}>{l.label}</text>
              ))}
            </g>
            <g style={{ fontFamily: "var(--sans)" }} fontSize="17">
              {LAYERS.map((l) => (
                <text key={l.y} x="84" y={l.y + 52}>{l.tech}</text>
              ))}
            </g>
            <rect x="504" y="0" width="56" height="380" fill="#ff5a1f" fillOpacity=".1" stroke="#ff5a1f" strokeWidth="1.2" />
            <text x="532" y="404" fontSize="11" letterSpacing="1.2" textAnchor="middle" fill="#ff5a1f">AI AGENTS / RAG — ACROSS LAYERS</text>
            <g stroke="#1a1c1a" strokeWidth=".8">
              <line x1="30" y1="20" x2="30" y2="360" />
              <line x1="20" y1="20" x2="60" y2="20" />
              <line x1="20" y1="360" x2="60" y2="360" />
              <line x1="24" y1="26" x2="36" y2="14" />
              <line x1="24" y1="366" x2="36" y2="354" />
            </g>
            <text transform="translate(16 190) rotate(-90)" fontSize="10.5" letterSpacing="1.6" textAnchor="middle">
              END-TO-END · {years} YRS
            </text>
            <g stroke="#1a1c1a" strokeWidth=".8">
              {LAYERS.map((l) => (
                <line key={l.y} x1="640" y1={l.y + 34} x2="684" y2={l.y + 34} />
              ))}
            </g>
          </svg>
          {meta.annotations.map((a, i) => (
            <div key={i} className="annot" style={{ top: ANNOT_TOPS[i] }}>
              <span className="annot-title">{LETTERS[i]}&nbsp;&nbsp;{pick(a.title)}</span>
              <span className="annot-text">{pick(a.text)}</span>
            </div>
          ))}
        </div>
        <ul className="annot-list">
          {meta.annotations.map((a, i) => (
            <li key={i}>
              <span className="k">{LETTERS[i]}</span>
              <span className="ti">{pick(a.title)}</span>
              <span className="tx">{pick(a.text)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="index" data-screen-label="Index">
        <div className="index-head">
          <span>SHEET INDEX</span>
          <span>{String(SHEETS.length).padStart(2, "0")} SHEETS</span>
        </div>
        <div className="sheet-grid">
          {SHEETS.map((s) => (
            <Link key={s.key} href={s.href} className="sheet-card">
              <span className="no">
                <span>{sheetNo(s.key)} / {SHEET_TOTAL}</span>
                <span className="accent">{s.flag}</span>
              </span>
              <span className="title">{s.title}</span>
              <span className="sub">{pick(s.sub)}</span>
              <span className="preview">{pick(s.preview)}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
