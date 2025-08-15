"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { FiChevronDown } from "react-icons/fi";

export default function PriceCard({ plan, isMonthly }) {
  const cameraOptions = [
    "Select Cameras",
    "No Cameras",
    isMonthly
      ? "Add Camera Maintenance +$25"
      : "Add Camera Maintenance +$100",
  ];

  const [selectedCamera, setSelectedCamera] = useState(cameraOptions[0]);

  const hasPrice = plan.priceMonthly !== null && plan.priceAnnual !== null;

  const basePrice = isMonthly ? plan.priceMonthly : plan.priceAnnual;

  const extraCost =
    selectedCamera === cameraOptions[2]
      ? isMonthly
        ? 25
        : 100
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
          <div className="mb-6 flex items-baseline whitespace-nowrap rounded-md bg-primary px-4 py-2 text-2xl font-extrabold text-black w-fit">
            <span className="mr-1">$</span>
            <CountUp end={basePrice} duration={0.6} preserveValue />
            <span className="ml-1 text-sm font-normal">{billingLabel}</span>
          </div>
        ) : (
          <div className="mb-6 text-xl font-extrabold text-primary">
            Inquire for a personalized quote
          </div>
        )}

        {/* Description */}
        <p className="mb-6 text-base-content">{plan.description}</p>

        <Section title="Best For" items={plan.bestFor} />
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
  return (
    <>
      <p className="mb-2 text-lg font-bold uppercase text-primary">{title}</p>
      <ul className="mb-6 list-inside list-disc space-y-1 text-base-content">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
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
