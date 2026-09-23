import type { Metadata } from "next";
import { ContactSheet } from "@/components/site/SimpleSheets";

export const metadata: Metadata = { title: "09 Contact" };

export default function Page() {
  return <ContactSheet />;
}
