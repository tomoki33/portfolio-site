import type { Metadata } from "next";
import { ReadingSheet } from "@/components/site/SimpleSheets";

export const metadata: Metadata = { title: "06 Materials" };

export default function Page() {
  return <ReadingSheet />;
}
