"use client";

import SectionTitle from "../../Layout/Titles/SectionTitle";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      {/* Section title */}
      <SectionTitle
        title="What Clients Are Saying"
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
      />

      {/* Testimonial stack */}
      <div className="p-7 md:p-14 lg:p-16 overflow-hidden">
        <TestimonialCard />
      </div>
    </section>
  );
}
