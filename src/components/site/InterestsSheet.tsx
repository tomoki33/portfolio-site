"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";
import type { HobbyDrawing } from "@/lib/types";
import Sheet, { two } from "@/components/site/Sheet";

const label = { fontSize: 9, letterSpacing: 1, stroke: "none", textAnchor: "middle" } as const;

/** Line drawings — geometry copied from the Blueprint prototype. */
const DRAWINGS: Record<HobbyDrawing, React.ReactNode> = {
  surf: (
    <>
      <rect x="40" y="62" width="240" height="44" rx="22" />
      <line x1="58" y1="84" x2="262" y2="84" strokeDasharray="4 3" strokeWidth=".7" />
      <rect x="246" y="106" width="12" height="12" stroke="#ff5a1f" />
      <line x1="40" y1="140" x2="280" y2="140" strokeWidth=".7" />
      <line x1="40" y1="132" x2="40" y2="148" strokeWidth=".7" />
      <line x1="280" y1="132" x2="280" y2="148" strokeWidth=".7" />
      <text x="160" y="160" fill="#6f716d" {...label}>LENGTH —</text>
      <text x="252" y="132" fill="#ff5a1f" {...label}>FIN</text>
      <text x="160" y="50" fill="#6f716d" {...label}>STRINGER</text>
    </>
  ),
  gym: (
    <>
      <line x1="20" y1="90" x2="300" y2="90" strokeWidth="2" />
      <rect x="60" y="45" width="14" height="90" stroke="#ff5a1f" />
      <rect x="76" y="57" width="10" height="66" />
      <rect x="88" y="80" width="6" height="20" />
      <rect x="246" y="45" width="14" height="90" stroke="#ff5a1f" />
      <rect x="234" y="57" width="10" height="66" />
      <rect x="226" y="80" width="6" height="20" />
      <line x1="94" y1="150" x2="226" y2="150" strokeWidth=".7" />
      <line x1="94" y1="142" x2="94" y2="158" strokeWidth=".7" />
      <line x1="226" y1="142" x2="226" y2="158" strokeWidth=".7" />
      <text x="160" y="170" fill="#6f716d" {...label}>BAR 20 KG</text>
      <text x="67" y="34" fill="#ff5a1f" {...label}>PLATE</text>
    </>
  ),
  golf: (
    <>
      <line x1="20" y1="140" x2="300" y2="140" />
      <rect x="54" y="128" width="4" height="12" />
      <circle cx="56" cy="120" r="8" />
      <path d="M66 116 Q170 -10 276 136" stroke="#ff5a1f" strokeDasharray="4 3" />
      <line x1="282" y1="88" x2="282" y2="140" />
      <polygon points="282,88 302,95 282,102" />
      <circle cx="282" cy="140" r="3" />
      <text x="170" y="40" fill="#ff5a1f" {...label}>CARRY —</text>
      <text x="56" y="160" fill="#6f716d" {...label}>TEE</text>
      <text x="282" y="160" fill="#6f716d" {...label}>PIN</text>
    </>
  ),
  coffee: (
    <>
      <polygon points="112,30 208,30 180,92 140,92" />
      <line x1="122" y1="44" x2="198" y2="44" strokeWidth=".7" strokeDasharray="3 3" />
      <circle cx="160" cy="102" r="2" stroke="#ff5a1f" />
      <rect x="116" y="112" width="88" height="52" />
      <rect x="117" y="134" width="86" height="29" fill="#ff5a1f" fillOpacity=".15" stroke="none" />
      <line x1="204" y1="126" x2="220" y2="126" />
      <line x1="220" y1="126" x2="220" y2="150" />
      <line x1="210" y1="150" x2="220" y2="150" />
      <text x="60" y="64" fill="#6f716d" {...label}>RATIO 1 : —</text>
      <text x="60" y="80" fill="#6f716d" {...label}>WATER —°C</text>
      <text x="262" y="142" fill="#ff5a1f" {...label}>YIELD</text>
    </>
  ),
};

export default function InterestsSheet() {
  const { pick } = useLang();
  return (
    <Sheet sheet="interests" sub="OFF THE CLOCK">
      <div className="details">
        {profile.hobbies.items.map((h, i) => (
          <div key={h.drawing} className="detail">
            <div className="head">
              <span>DETAIL {two(i)}</span>
              <span>SCALE NTS</span>
            </div>
            <svg viewBox="0 0 320 180" fill="none" stroke="#1a1c1a" strokeWidth="1" aria-hidden="true">
              {DRAWINGS[h.drawing]}
            </svg>
            <div className="cap">
              <span className="title">{pick(h.title)}</span>
              <span className="text">{pick(h.text)}</span>
            </div>
            <div className="specs">
              {h.specs.map((s) => (
                <div key={s.label}>
                  <span className="k">{s.label}</span>
                  <span>{pick(s.value) || "—"}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Sheet>
  );
}
