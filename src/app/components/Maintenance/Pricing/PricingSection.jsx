"use client";

import { Construction, HandFist, Satellite } from "lucide-react";
import { useState } from "react";
import {
  commonFeatures,
  plans
} from "../../../lib/data/maintenanceData";
import FeaturesList from "../../Layout/Cards/FeaturesList";
import Container from "../../Layout/Container";
import LinearLeft from "../../Layout/Images/LinearLeft";
import SectionTitle from "../../Layout/Titles/SectionTitle";
import BillingToggle from "./BillingToggle";
import PriceCard from "./PriceCard";
import Table from "../../Layout/Table/Table";
import FeatureCards from "../../Layout/Cards/FeatureCards";
import { maintenanceTableData } from "../../../lib/data/maintenanceTableData";


const featureCards = [
  { title: "Expert Support" },
  { title: "Proactive Maintenance" },
  { title: "Long-term Peace of Mind" },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const toggleBillingPeriod = () => setIsAnnual((prev) => !prev);

  return (
    <>
      <Container>
        <SectionTitle title="🌟 Luxifi Care Plans" />
        <FeatureCards features={featureCards} />
        {/* <ul className="flex flex-col gap-2 max-w-6xl mx-auto list-disc list-inside text-2xl">
          <li className="flex items-center gap-2">
            {" "}
            <HandFist /> Expert support
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <Construction /> Proactive maintenance
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <Satellite /> Long-term peace of mind
          </li>
        </ul> */}
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
      <Table title="The Luxifi Plan" planData={maintenanceTableData}/>
      <LinearLeft />
    </>
  );
}