"use client";

import { useState } from "react";
import FeatureCards from "../../Layout/Cards/FeatureCards";
import FeaturesList from "../../Layout/Cards/FeaturesList";
import Container from "../../Layout/Container";
import LinearRight from "../../Layout/Images/LinearRight";
import SectionTitle from "../../Layout/Titles/SectionTitle";
import BillingToggle from "./BillingToggle";
import PriceCard from "./PriceCard";

import {
  commonFeatures,
  featureCards,
  plans,
} from "../../../lib/data/maintenanceData";

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleBillingPeriod = () => setIsMonthly((prev) => !prev);

  return (
    <>
      <Container>
        <SectionTitle title="🌟 Luxifi Care Plans" />
        <FeatureCards features={featureCards} />
        <FeaturesList features={commonFeatures} />

        <BillingToggle isMonthly={isMonthly} onToggle={toggleBillingPeriod} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {plans.map((plan, index) => (
            <div key={plan.id} className="flex flex-col h-full">
              <PriceCard plan={plan} isMonthly={isMonthly} />
              <button
                type="button"
                className={`w-1/2 rounded-md border border-gray-500 bg-transparent py-2 text-sm uppercase tracking-wider text-primary transition cursor-pointer hover:bg-primary hover:text-black ${
                  index === 2 ? "mt-16" : "mt-4"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </Container>
      <LinearRight />
    </>
  );
}
