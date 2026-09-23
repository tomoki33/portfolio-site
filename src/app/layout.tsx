import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import profile from "@/data/profile";
import { LANG_COOKIE, pick } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { LangProvider } from "@/components/LangContext";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], weight: ["300", "400", "500"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], weight: ["400", "500"] });
const zenKaku = Zen_Kaku_Gothic_New({ variable: "--font-zen-kaku", subsets: ["latin"], weight: ["400", "500"] });

const siteName = `${profile.meta.name.en} / ${profile.meta.name.ja}`;
const lead = pick(profile.meta.lead, "en");

export const metadata: Metadata = {
  title: { default: `${siteName} — ${pick(profile.meta.role, "en")}`, template: `%s — ${profile.meta.name.en}` },
  description: lead,
  openGraph: { title: siteName, description: lead, type: "profile" },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieLang = (await cookies()).get(LANG_COOKIE)?.value;
  const lang: Lang = cookieLang === "ja" ? "ja" : "en";

  return (
    <html lang={lang} className={`${geist.variable} ${geistMono.variable} ${zenKaku.variable}`}>
      <body>
        <LangProvider defaultLang={lang}>
          <Nav />
          <main className="container">
            {children}
            <Footer />
          </main>
        </LangProvider>
      </body>
    </html>
  );
}
