import type { Metadata } from "next";
import { NowSheet } from "@/components/site/SimpleSheets";

export const metadata: Metadata = { title: "02 In progress" };

export default function Page() {
  return <NowSheet />;
}
