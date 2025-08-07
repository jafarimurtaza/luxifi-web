"use client";

import { useState } from "react";
import Container from "../../Layout/Container";
import SectionTitle from "../../Layout/Titles/SectionTitle";
import LinearLeft from "../../Layout/Images/LinearLeft";
import PriceCard from "@/app/components/Maintenance/Pricing/PriceCard";
import BillingToggle from "@/app/components/Maintenance/Pricing/BillingToggle";
import { commonFeatures, plans } from "@/app/lib/data/maintenanceData";
import FeaturesList from "../../Layout/Cards/FeaturesList";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const toggleBillingPeriod = () => setIsAnnual((prev) => !prev);

  return (
    <>
      <Container>
        <SectionTitle title="🌟 Luxifi Care Plans" />
        <FeaturesList features={commonFeatures} />
        <BillingToggle isAnnual={isAnnual} onToggle={toggleBillingPeriod} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <PriceCard
                key={plan.id}
                plan={plan}
                price={price}
                isAnnual={isAnnual}
              />
            );
          })}
        </div>
      </Container>
      <LinearLeft />
    </>
  );
}
