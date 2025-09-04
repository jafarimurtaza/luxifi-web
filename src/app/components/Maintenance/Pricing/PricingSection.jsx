"use client";

import Link from "next/link";
import { useState } from "react";
import FeatureCards from "../../Layout/Cards/FeatureCards";
import FeaturesList from "../../Layout/Cards/FeaturesList";
import Container from "../../Layout/Container";
import LinearRight from "../../Layout/Images/LinearRight";
import SectionTitle from "../../Layout/Titles/SectionTitle";
import BillingToggle from "./BillingToggle";
import PriceCard from "./PriceCard";

import { PLAN_CONFIG } from "../../../lib/constants";
import {
  commonFeatures,
  featureCards,
} from "../../../lib/data/maintenanceData";

export default function PricingSection({ plans }) {
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleBillingPeriod = () => setIsMonthly((prev) => !prev);

  return (
    <>
      <Container>
        <SectionTitle title="🌟 Luxifi Care Plans" />
        <FeatureCards features={featureCards} />
        <FeaturesList features={commonFeatures} />

        <BillingToggle isMonthly={isMonthly} onToggle={toggleBillingPeriod} />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-20">
          {plans
            ?.sort((a, b) => a.order - b.order)
            ?.map((plan, index) => (
              <div
                key={`plan-${index}-${plan.documentId}`}
                className="flex flex-col h-full"
              >
                <PriceCard plan={plan} isMonthly={isMonthly} />

                {index === 2 ? (
                  <Link
                    href="/contact"
                    aria-label="Contact us for custom plan"
                    role="button"
                    className="w-1/2 rounded-md border border-gray-500 bg-transparent py-2 text-sm uppercase tracking-wider text-primary transition cursor-pointer hover:bg-primary hover:text-black mt-16 text-center"
                  >
                    {plan.button_label}
                  </Link>
                ) : (
                  // First two buttons → Bank account page (same tab)
                  <Link
                    href={PLAN_CONFIG.BANK_PAYMENT_LINK}
                    aria-label="Pay via bank transfer"
                    role="button"
                    className="w-1/2 rounded-md border border-gray-500 bg-transparent py-2 text-sm uppercase tracking-wider text-primary transition cursor-pointer hover:bg-primary hover:text-black mt-4 text-center"
                  >
                    {plan.button_label}
                  </Link>
                )}
              </div>
            ))}
        </div>
      </Container>
      <LinearRight />
    </>
  );
}
