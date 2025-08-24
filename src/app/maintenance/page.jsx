import FAQSection from "../components/Maintenance/FAQ/FAQSection";
import HeroSection from "../components/Maintenance/HeroSection";
import PricingSection from "../components/Maintenance/Pricing/PricingSection";
import { getMaintenancePlans } from "../lib/apiCleint";
import { pageMetadata } from "../lib/seo/pageMetadata";
import { backupPlansData } from "../lib/data/maintenanceData";
export const metadata = pageMetadata.maintenance;

export default async function Maintenance() {
  const plans = await getMaintenancePlans();
  const plansData = plans?.data;

  const dataToShow =
    plansData && plansData.length > 0 ? plansData : backupPlansData;

  console.log("The plans are", plansData);
  console.log("The data To Show", dataToShow);
  return (
    <>
      <HeroSection />
      <PricingSection plans={dataToShow} />
      <FAQSection />
    </>
  );
}
