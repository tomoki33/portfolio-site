import type { Metadata } from "next";
import { ValuesSheet } from "@/components/site/SimpleSheets";

export const metadata: Metadata = { title: "07 Specifications" };

export default function Page() {
  return <ValuesSheet />;
}
