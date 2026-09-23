"use client";

import Link from "next/link";
import { SHEETS, sheetNo, type SheetKey } from "@/lib/i18n";

/**
 * One numbered drawing sheet: a 220px label column (NN / 09, title, sub-label)
 * next to the content, followed by the prev / next bar.
 */
export default function Sheet({
  sheet,
  sub,
  subAccent = false,
  extra,
  children,
}: {
  sheet: SheetKey;
  /** Override the default sub-label. */
  sub?: string;
  subAccent?: boolean;
  extra?: React.ReactNode;
  children: React.ReactNode;
}) {
  const i = SHEETS.findIndex((s) => s.key === sheet);
  const s = SHEETS[i];
  const home = { href: "/", no: "01", title: "Index" };
  const prev = i > 0 ? { href: SHEETS[i - 1].href, no: sheetNo(SHEETS[i - 1].key), title: SHEETS[i - 1].title } : home;
  const next = i < SHEETS.length - 1 ? { href: SHEETS[i + 1].href, no: sheetNo(SHEETS[i + 1].key), title: SHEETS[i + 1].title } : home;

  return (
    <>
      <section className="sheet" data-screen-label={`${sheetNo(sheet)} ${s.title}`}>
        <div className="sheet-label">
          <span className="no">{sheetNo(sheet)} / 09</span>
          <h2>{s.title}</h2>
          <span className={subAccent ? "sub accent" : "sub"}>{sub ?? s.sub.en}</span>
          {extra}
        </div>
        <div className="sheet-body">{children}</div>
      </section>
      <div className="prevnext">
        <Link href={prev.href}>
          <span className="no">← {prev.no}</span>
          <span className="title">{prev.title}</span>
        </Link>
        <Link href={next.href}>
          <span className="no">{next.no} →</span>
          <span className="title">{next.title}</span>
        </Link>
      </div>
    </>
  );
}

/** Two-digit row number: 0 -> "01". */
export function two(n: number) {
  return String(n + 1).padStart(2, "0");
}
