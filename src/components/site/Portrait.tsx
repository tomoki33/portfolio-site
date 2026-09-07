"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/LangContext";

/**
 * Portrait photo slot. Drop a photo at `public/portrait.jpg` and it
 * replaces this placeholder automatically — no code change needed.
 *
 * The photo is probed client-side with an in-memory `Image` before ever
 * rendering a real `<img>`: a server-rendered `<img src="/portrait.jpg">`
 * that 404s starts loading (and erroring) the instant the browser parses
 * the HTML, which on a fast local response usually loses the race with
 * React hydration attaching its onError handler — leaving a permanently
 * broken image. Probing after mount avoids that race entirely.
 */
export default function Portrait() {
  const { lang } = useLang();
  const [found, setFound] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setFound(true);
    img.onerror = () => setFound(false);
    img.src = "/portrait.jpg";
  }, []);

  return (
    <div className="plate" style={{ maxWidth: 340, position: "relative" }}>
      <div style={{ width: "100%", aspectRatio: "4 / 5", position: "relative", background: "var(--color-surface)" }}>
        {found ? (
          // eslint-disable-next-line @next/next/no-img-element -- simple drop-in slot, no fixed dimensions to optimize
          <img
            src="/portrait.jpg"
            alt="Portrait"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--space-3)",
              background:
                "repeating-linear-gradient(135deg, var(--color-neutral-200) 0 7px, var(--color-bg) 7px 14px)",
              border: "1px dashed var(--color-neutral-400)",
            }}
          >
            <p
              style={{
                margin: 0,
                font: "400 11px/1.6 ui-monospace, Menlo, monospace",
                letterSpacing: ".04em",
                color: "var(--color-neutral-700)",
                textAlign: "center",
              }}
            >
              {lang === "ja"
                ? "public/portrait.jpg にポートレートを置くと表示されます"
                : "Drop a portrait at public/portrait.jpg"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
