"use client";

import CountUp from "react-countup";

export default function PriceCard({ plan, price, isAnnual }) {
  const billingLabel = isAnnual ? " / year" : " / mo";

  return (
    <div className="flex flex-col h-full p-8 border border-primary rounded-xl bg-transparent shadow-[6px_6px_12px_0_#fff]">
      {/* Title */}
      <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-primary">
        {plan.name}
      </h3>

      {/* Price */}
      {price !== null ? (
        <div className="mb-6 flex items-baseline whitespace-nowrap rounded-md bg-white px-4 py-2 text-2xl font-extrabold text-black w-fit">
          <span className="mr-1">$</span>
          <CountUp end={price} duration={0.6} preserveValue />
          <span className="ml-1 text-sm font-normal">{billingLabel}</span>
        </div>
      ) : (
        <div className="mb-6 text-xl font-extrabold text-white">
          Custom Quote
        </div>
      )}

      {/* Description */}
      <p className="mb-6 text-base-content">{plan.description}</p>

      <Section title="Best For" items={plan.bestFor} />
      <Section title="Includes" items={plan.includes} />

      <button
        type="button"
        className="mt-auto w-full rounded-md border border-gray-500 bg-transparent py-2 text-sm uppercase tracking-wider text-primary transition cursor-pointer hover:bg-primary hover:text-black"
      >
        {plan.buttonText}
      </button>
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
