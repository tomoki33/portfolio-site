"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";
import Sheet from "@/components/site/Sheet";

export default function WorksSheet() {
  const { pick, t } = useLang();

  return (
    <Sheet sheet="works" sub="WORKS · SIDE PROJECTS">
      <div className="figures">
        {profile.works.map((w, i) => {
          const title = pick(w.title ?? w.slot);
          const img = w.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={w.image} alt={`${title} screenshot`} loading="lazy" />
          ) : (
            t.screenshot
          );
          return (
            <figure key={i} className="figure">
              {w.url ? (
                <a className="figure-img" href={w.url} target="_blank" rel="noreferrer">{img}</a>
              ) : (
                <div className="figure-img">{img}</div>
              )}
              <figcaption>
                <span className="fig">
                  <span>FIG. {i + 1}{w.kind ? ` · ${pick(w.kind)}` : ""}</span>
                  <span>{w.year}</span>
                </span>
                <span className="title">{title}</span>
                {w.placeholder ? (
                  <span className="desc">{pick(w.hint)}</span>
                ) : (
                  <span className="desc">
                    <b>{pick(w.problem)}</b> <span className="arrow">→</span> {pick(w.approach)}
                  </span>
                )}
                {w.stack && w.stack.length > 0 && (
                  <div className="tags">
                    {w.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                )}
                <span className="foot">
                  {w.url ? (
                    <a className="link" href={w.url} target="_blank" rel="noreferrer">
                      {w.urlLabel ?? "OPEN"} ↗
                    </a>
                  ) : (
                    <span className="note">{pick(w.note)}</span>
                  )}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </Sheet>
  );
}
