"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { FiChevronDown } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { PLAN_CONFIG } from "../../../lib/constants";

export default function PriceCard({ plan, isMonthly }) {
  const cameraOptions = [
    "Select Cameras",
    "No Cameras",
    isMonthly ? "Add Camera Maintenance +$25" : "Add Camera Maintenance +$100",
  ];

  const [selectedCamera, setSelectedCamera] = useState(cameraOptions[0]);

  // Convert API string prices to numbers for proper calculations
  const monthlyPrice = parseFloat(
    plan.price_monthly ?? plan.priceMonthly ?? plan.monthly ?? null
  );
  const annualPrice = parseFloat(
    plan.price_annual ?? plan.priceAnnual ?? plan.annual ?? null
  );

  const hasPrice =
    !isNaN(monthlyPrice) &&
    !isNaN(annualPrice) &&
    monthlyPrice !== null &&
    annualPrice !== null;

  const basePrice = isMonthly ? monthlyPrice : annualPrice;

  const extraCost =
    selectedCamera === cameraOptions[2]
      ? isMonthly
        ? PLAN_CONFIG.CAMERA_MONTHLY_PRICE
        : PLAN_CONFIG.CAMERA_YEARLY_PRICE
      : 0;

  const totalPrice = hasPrice ? basePrice + extraCost : null;

  const billingLabel = isMonthly ? " / mo" : " / year";

  return (
    <div className="flex flex-col">
      {/* Card container with fixed height */}
      <div className="flex flex-col p-8 border border-primary rounded-xl bg-transparent shadow-[6px_6px_12px_0_#fff] h-[650px]">
        {/* Title */}
        <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-primary">
          {plan.name}
        </h3>

        {/* Top Price: always base price only */}
        {hasPrice ? (
          <div className="mb-6 flex flex-col">
            <div className="flex items-baseline whitespace-nowrap rounded-md bg-primary px-4 py-2 text-2xl font-extrabold text-black w-fit">
              <span className="mr-1">$</span>
              <CountUp end={basePrice} duration={0.6} preserveValue />
              <span className="ml-1 text-sm font-normal">{billingLabel}</span>
            </div>

            {/* Discount indicator for annual billing */}
            {!isMonthly && monthlyPrice && annualPrice && (
              <div className="mt-2 text-xl text-base-content">
                <span className="line-through opacity-70 mr-2">
                  ${monthlyPrice * 12} / year
                </span>
                <span className="text-primary font-semibold">
                  Save{" "}
                  {Math.round(
                    ((monthlyPrice * 12 - annualPrice) / (monthlyPrice * 12)) *
                      100
                  )}
                  %
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="mb-6 text-xl font-extrabold text-primary">
            Inquire for a personalized quote
          </div>
        )}

        {/* Description */}
        <p className="mb-6 text-base-content">{plan.description}</p>

        <Section title="Best For" items={plan.best_for} />
        <Section title="Includes" items={plan.includes} />
      </div>

      {/* Transparent Custom Dropdown with total price below */}
      {hasPrice && (
        <div className="mt-8">
          <div className="mb-2 text-2xl text-primary flex items-baseline">
            <span className="mr-1">$</span>
            <CountUp
              end={totalPrice}
              duration={0.6}
              preserveValue
              className="inline-block"
            />
            <span className="ml-2 text-lg font-normal">
              {isMonthly ? (
                <CountUp
                  start={0}
                  end={1}
                  duration={0.6}
                  preserveValue
                  formattingFn={() => "every month"}
                />
              ) : (
                <CountUp
                  start={0}
                  end={1}
                  duration={0.6}
                  preserveValue
                  formattingFn={() => "every 12 months"}
                />
              )}
            </span>
          </div>
          <CustomDropdown
            options={cameraOptions}
            selected={selectedCamera}
            onChange={setSelectedCamera}
          />
        </div>
      )}
    </div>
  );
}

function Section({ title, items }) {
  const customComponents = {
    ul: ({ children }) => (
      <ul className="mb-4 space-y-1 list-disc list-inside text-base-content">
        {children}
      </ul>
    ),

    li: ({ children }) => <li className="text-base-content">{children}</li>,
    p: ({ children }) => <p className="mb-2 text-base-content">{children}</p>,
  };

  return (
    <>
      <p className="text-lg font-bold uppercase text-primary">{title}</p>
      <ReactMarkdown components={customComponents}>{items}</ReactMarkdown>
    </>
  );
}

function CustomDropdown({ options, selected, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Closed state */}
      <div
        className="w-full flex items-center justify-between rounded border border-primary bg-transparent px-3 py-2 text-base text-white cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <span>{selected}</span>
        <FiChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          size={20}
        />
      </div>

      {/* Open list */}
      {open && (
        <ul className="absolute z-10 w-full mt-1 rounded border border-primary bg-transparent backdrop-blur-md text-white">
          {options.map((option, i) => (
            <li
              key={i}
              className="px-3 py-2 cursor-pointer hover:bg-primary/20"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              tabIndex={0}
              role="option"
              aria-selected={selected === option}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onChange(option);
                  setOpen(false);
                }
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
