"use client";

import { useState } from "react";
import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";
import { ym } from "@/lib/i18n";
import Sheet, { two } from "@/components/site/Sheet";

const AXIS_START = 2020;
const AXIS_END = 2026.75;

/** "YYYY-MM" -> fractional year at the start of that month. */
function frac(s: string) {
  const [y, m] = s.split("-").map(Number);
  return y + (m - 1) / 12;
}
const pct = (v: number) => `${(((v - AXIS_START) / (AXIS_END - AXIS_START)) * 100).toFixed(2)}%`;

export default function CareerSheet() {
  const { pick, t } = useLang();
  const [open, setOpen] = useState(0);
  const years = Array.from({ length: 7 }, (_, i) => AXIS_START + i);

  return (
    <Sheet sheet="career" sub="CAREER · 2020 → NOW">
      <div className="elev">
        <div className="timeline" aria-hidden="true">
          <div className="pivot" />
          <span className="pivot-label">PIVOT → ENGINEERING</span>
          {profile.career.map((c, i) => {
            const s = frac(c.from);
            const e = c.to ? frac(c.to) : AXIS_END - 0.02;
            return (
              <div key={i} className={`bar ${c.kind}`} style={{ left: pct(s), width: `calc(${pct(e)} - ${pct(s)})` }} />
            );
          })}
          {years.map((y) => (
            <span key={y} className="year" style={{ left: pct(y) }}>{y}</span>
          ))}
        </div>
        <div className="legend">
          <span><i />FULL-TIME</span>
          <span><i className="side" />CONTRACT / SIDE</span>
          <span><i className="sales" />PRE-ENGINEERING</span>
          <span><i className="now" />CURRENT</span>
        </div>
        <div>
          {profile.career.map((c, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="acc">
                <button
                  type="button"
                  className="acc-btn"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="date">{ym(c.from)} — {c.to ? ym(c.to) : "NOW"}</span>
                  <span className="who">
                    <span className="org">{c.orgShort}</span>
                    <span className="role">{pick(c.roleShort)}</span>
                  </span>
                  <span className={c.kind === "now" ? "tag now" : "tag"}>{t.tags[c.kind]}</span>
                  <span className="icon">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="acc-panel">
                    <span className="label">{t.scope}</span>
                    <div className="body">
                      <p>{pick(c.summary)}</p>
                      <ul className="duties">
                        {c.bullets.map((b, j) => (
                          <li key={j}>
                            <span className="n">{two(j)}</span>
                            <span>{pick(b)}</span>
                          </li>
                        ))}
                      </ul>
                      {c.stack.length > 0 && (
                        <div className="tags">
                          {c.stack.map((s) => <span key={s}>{s}</span>)}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Sheet>
  );
}
