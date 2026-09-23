import type { Metadata } from "next";
import WritingSheet from "@/components/site/WritingSheet";
import { getNotes } from "@/lib/zenn";

export const metadata: Metadata = { title: "05 Notes" };

export default async function Page() {
  return <WritingSheet notes={await getNotes()} />;
}
