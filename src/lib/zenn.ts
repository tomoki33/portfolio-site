import profile from "@/data/profile";

export interface Note {
  title: string;
  url: string;
  /** "YYYY.MM.DD" */
  date: string;
}

const FEED = `${profile.articles.source}/feed`;

function unwrap(s: string) {
  return s.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
}

/** Latest articles from the Zenn RSS feed, cached for an hour. Empty on failure. */
export async function getNotes(limit = 12): Promise<Note[]> {
  try {
    const res = await fetch(FEED, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit).map(([, item]) => {
      const tag = (name: string) => unwrap(item.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1] ?? "");
      const d = new Date(tag("pubDate"));
      // Dates in JST, formatted like the rest of the drawing set.
      const jst = new Date(d.getTime() + 9 * 3600 * 1000);
      const date = Number.isNaN(d.getTime())
        ? ""
        : `${jst.getUTCFullYear()}.${String(jst.getUTCMonth() + 1).padStart(2, "0")}.${String(jst.getUTCDate()).padStart(2, "0")}`;
      return { title: tag("title"), url: tag("link"), date };
    });
  } catch {
    return [];
  }
}
