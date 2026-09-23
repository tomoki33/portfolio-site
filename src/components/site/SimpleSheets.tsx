"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";
import Sheet, { two } from "@/components/site/Sheet";

export function NowSheet() {
  const { pick } = useLang();
  return (
    <Sheet sheet="now" sub={`★ REV ${profile.now.updated.replace("-", ".")}`} subAccent>
      <div className="rows">
        {profile.now.items.map((item, i) => (
          <div key={i} className="row row-now">
            <span className="no">{two(i)}</span>
            <span className="text">{pick(item)}</span>
          </div>
        ))}
      </div>
    </Sheet>
  );
}

export function ReadingSheet() {
  const { pick, t } = useLang();
  return (
    <Sheet sheet="reading" sub={t.matSub}>
      <div className="books">
        {profile.reading.items.map((b, i) => {
          const cover = (
            <div className="cover">
              {b.coverUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={b.coverUrl} alt={b.title ?? ""} />
              ) : (
                t.cover
              )}
            </div>
          );
          return (
            <div key={i} className="book">
              <span className="label">{pick(b.label)}</span>
              {b.url ? <a href={b.url} target="_blank" rel="noreferrer">{cover}</a> : cover}
              <span className="title">{b.placeholder ? pick({ en: "Title — Author", ja: "タイトル — 著者" }) : b.title}</span>
              <span className="note">{b.placeholder ? pick(b.hint) : pick(b.note)}</span>
            </div>
          );
        })}
      </div>
    </Sheet>
  );
}

export function ValuesSheet() {
  const { pick, t } = useLang();
  return (
    <Sheet sheet="values" sub={t.specSub}>
      <div className="rows">
        {profile.values.items.map((v, i) => (
          <div key={i} className="row row-spec">
            <span className="id">SPEC-{two(i)}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span className="title">{pick(v.title)}</span>
              <span className="desc">{pick(v.text)}</span>
            </div>
          </div>
        ))}
      </div>
    </Sheet>
  );
}

export function ContactSheet() {
  const { t } = useLang();
  const link = (label: string) => profile.meta.links.find((l) => l.label === label)!.url;
  const rows = [
    { k: "GITHUB", v: "tomoki33", href: link("GitHub") },
    { k: "ZENN", v: "tomoki33", href: link("Zenn") },
    { k: "LINKEDIN", v: "tomoki-miyazawa", href: link("LinkedIn") },
    { k: "RESUME", v: "PDF", href: "/api/resume", accent: true },
  ];
  return (
    <Sheet sheet="contact" sub="OPEN TO TALK">
      <div className="contact">
        <div className="contact-head">
          <p className="contact-big">Let&apos;s build something.</p>
          <p className="contact-sub">{t.contact}</p>
        </div>
        <div className="rows">
          {rows.map((r) => (
            <a key={r.k} href={r.href} target="_blank" rel="noreferrer" className="row row-link">
              <span className="k">{r.k}</span>
              <span className={r.accent ? "v accent" : "v"}>{r.v}</span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </Sheet>
  );
}
