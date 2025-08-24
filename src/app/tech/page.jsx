import TechSection from "../components/Tech/TechSection";
import FAQSection from "../components/Tech/FAQ/FAQSection";
import HeroSection from "../components/Tech/HeroSection";
import { pageMetadata } from "../lib/seo/pageMetadata";

export const metadata = pageMetadata.tech;

export default function TechPage() {
  return (
    <>
      <HeroSection />
      <TechSection />
      <FAQSection />
    </>
  );
}
