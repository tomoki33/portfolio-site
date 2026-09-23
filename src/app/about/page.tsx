import type { Metadata } from "next";
import AboutPage from "@/components/site/AboutPage";
import profile from "@/data/profile";

export const metadata: Metadata = {
  title: `人となり — ${profile.meta.name.ja} / ${profile.meta.nameRoman}`,
  description: "価値観・趣味・読んでいるもの。",
};

export default function Page() {
  return <AboutPage />;
}
