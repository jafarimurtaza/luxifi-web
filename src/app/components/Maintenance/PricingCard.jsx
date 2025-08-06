"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    id: 1,
    name: "BRILLIANT BASIC",
    price: 27,
    features: [
      "Automated Outage Notifications",
      "Rapid Response Time",
      "Regular Performance Tuning",
      "Hassle-Free Remote Updates",
      "Advanced Metrics & Reporting",
      "Discounted Support",
    ],
    bestFor: [
      "5 Or Fewer Access Points",
      "1 Or Fewer VLANs",
      "Low-To-Mid Firewall Protection",
    ],
  },
  {
    id: 2,
    name: "BRILLIANT PLUS",
    price: 35,
    features: [
      "Automated Outage Notifications",
      "Rapid Response Time",
      "Regular Performance Tuning",
      "Hassle-Free Remote Updates",
      "Advanced Metrics & Reporting",
      "Discounted Support",
    ],
    bestFor: [
      "6 Or More Access Points",
      "2 Or More VLANs",
      "Mid-To-High Firewall Protection",
    ],
  },
  {
    id: 3,
    name: "BRILLIANT CUSTOM",
    price: null,
    features: [
      "Automated Outage Notifications",
      "Rapid Response Time",
      "Regular Performance Tuning",
      "Hassle-Free Remote Updates",
      "Advanced Metrics & Reporting",
      "Discounted Support",
    ],
    bestFor: [
      "10 Or More Access Points",
      "4 Or More VLANs",
      "Custom Firewall Protection",
    ],
  },
];

export default function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(true);

  const toggleSwitch = () => setIsAnnual(!isAnnual);

  const cardShadow = "6px 6px 12px 0 rgba(255,255,255,0.15)"; // soft white shadow

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 text-base-content">
      {/* Toggle */}
      <div className="mb-12 flex items-center justify-center gap-3 border border-gray-600 rounded-md px-4 py-2 text-lg select-none">
        <span className={`${isAnnual ? "font-bold" : "opacity-70"}`}>ANNUAL</span>
        <button
          onClick={toggleSwitch}
          aria-label="Toggle Billing Period"
          className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
            isAnnual ? "bg-gray-300" : "bg-gray-600"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-5 h-5 bg-black rounded-full shadow-md transform transition-transform duration-300 ${
              isAnnual ? "translate-x-0" : "translate-x-7"
            }`}
          ></span>
        </button>
        <span className={`${!isAnnual ? "font-bold" : "opacity-70"}`}>QUARTERLY</span>
      </div>

      {/* Cards */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const showPrice = plan.price !== null;
            const monthlyPrice = plan.price;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-transparent border border-primary text-base-content rounded-xl p-8 flex flex-col h-full"
                style={{ boxShadow: cardShadow }}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-5">
                  <h3 className="uppercase font-bold tracking-wide text-xl">{plan.name}</h3>
                  {showPrice && (
                    <div className="bg-white text-black font-extrabold rounded-md px-4 py-2 text-2xl flex items-baseline">
                      <span className="mr-1">$</span>
                      <span>{monthlyPrice}</span>
                      <span className="text-sm ml-1 font-normal">/mo</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3 text-base">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#030b17] font-bold text-sm mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Best For */}
                <div className="mb-6 text-base">
                  <p className="font-bold uppercase mb-3 text-lg">BEST FOR</p>
                  <ul className="space-y-2">
                    {plan.bestFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
