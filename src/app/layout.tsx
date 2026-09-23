import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Lora,
  Shippori_Mincho_B1,
  Zen_Old_Mincho,
} from "next/font/google";
import "./globals.css";
import profile from "@/data/profile";
import { pick } from "@/lib/i18n";
import { LangProvider } from "@/components/LangContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const shipporiMincho = Shippori_Mincho_B1({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteName = `${profile.meta.name.ja} / ${profile.meta.nameRoman}`;
const roleJa = pick(profile.meta.role, "ja");
const taglineJa = pick(profile.meta.tagline, "ja");

export const metadata: Metadata = {
  title: `${siteName} — ${roleJa}`,
  description: taglineJa,
  openGraph: {
    title: siteName,
    description: taglineJa,
    type: "profile",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${lora.variable} ${shipporiMincho.variable} ${zenOldMincho.variable}`}
    >
      <body>
        <LangProvider defaultLang="ja">{children}</LangProvider>
      </body>
    </html>
  );
}
