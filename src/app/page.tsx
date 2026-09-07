import { LangProvider } from "@/components/LangContext";
import PortfolioPage from "@/components/site/PortfolioPage";

export default function Page() {
  return (
    <LangProvider defaultLang="ja">
      <PortfolioPage />
    </LangProvider>
  );
}
