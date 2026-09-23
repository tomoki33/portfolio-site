"use client";

import { useLang } from "@/components/LangContext";
import profile from "@/data/profile";
import type { Note } from "@/lib/zenn";
import Sheet, { two } from "@/components/site/Sheet";

export default function WritingSheet({ notes }: { notes: Note[] }) {
  const { pick } = useLang();
  const source = profile.articles.source;

  return (
    <Sheet
      sheet="writing"
      sub="WRITING ON ZENN"
      extra={
        <a className="extra" href={source} target="_blank" rel="noreferrer">ALL POSTS ↗</a>
      }
    >
      <div className="rows">
        {notes.length > 0
          ? notes.map((n, i) => (
              <a key={n.url} href={n.url} target="_blank" rel="noreferrer" className="row row-note">
                <span className="no">N-{two(i)}</span>
                <span className="title">{n.title}</span>
                <span className="date">{n.date}</span>
              </a>
            ))
          : profile.articles.items.map((a, i) => (
              <a key={i} href={a.url ?? source} target="_blank" rel="noreferrer" className={`row row-note${a.placeholder ? " row-placeholder" : ""}`}>
                <span className="no">N-{two(i)}</span>
                <span className="title">{a.placeholder ? pick(a.hint) : a.title}</span>
                <span className="date">{a.date?.replaceAll("-", ".") ?? "2026.—"}</span>
              </a>
            ))}
      </div>
    </Sheet>
  );
}
