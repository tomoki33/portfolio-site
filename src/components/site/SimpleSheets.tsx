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
  const groups = profile.reading.groups;
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  // Book numbers run continuously across groups.
  const starts = groups.map((_, gi) => groups.slice(0, gi).reduce((n, g) => n + g.items.length, 0));
  return (
    <Sheet sheet="reading" sub={t.matSub} extra={<span className="extra">{total} BOOKS</span>}>
      <div className="shelf">
        {groups.map((g, gi) => (
          <section key={gi} className="shelf-group">
            <div className="shelf-head">
              <span className="label">{pick(g.label)}</span>
              <span className="count">{String(g.items.length).padStart(2, "0")}</span>
            </div>
            <div className="shelf-list">
              {g.items.map((b, i) => {
                const body = (
                  <>
                    <span className="no">B-{two(starts[gi] + i)}</span>
                    <span className="text">
                      <span className="title">{b.title}</span>
                      {b.author && <span className="author">{b.author}</span>}
                    </span>
                  </>
                );
                return b.url ? (
                  <a key={i} href={b.url} target="_blank" rel="noreferrer" className="book-row">{body}</a>
                ) : (
                  <div key={i} className="book-row">{body}</div>
                );
              })}
            </div>
          </section>
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
