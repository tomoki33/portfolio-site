import type { Metadata } from "next";
import InterestsSheet from "@/components/site/InterestsSheet";

export const metadata: Metadata = { title: "07 Details" };

export default function Page() {
  return <InterestsSheet />;
}
