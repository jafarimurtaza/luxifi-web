import FAQSection from "../components/Maintenance/FAQ/FAQSection";
import HeroSection from "../components/Maintenance/HeroSection";
import PricingSection from "../components/Maintenance/Pricing/PricingSection";
import { pageMetadata } from "../lib/seo/pageMetadata";

export const metadata = pageMetadata.maintenance;

export default function Maintenance() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
