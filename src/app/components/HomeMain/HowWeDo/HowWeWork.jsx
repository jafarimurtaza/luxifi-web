"use client";

import Link from "next/link";
import { workSteps } from "../../../lib/data/homedata";
import { StepCard } from "./StepCard";
import SectionTitle from "../../Layout/Titles/SectionTitle";
import { usePathname } from "next/navigation";

export default function HowWeWork() {
  const router = usePathname();

  const isApprocah = router.includes("approach");

  return (
    <div className="min-h-screen bg-black text-white  px-3">
      <div className="container mx-auto px-6 py-8">
        {/* Section Title */}
        <div className="text-center mb-6">
          {!isApprocah && <SectionTitle title="how it works" />}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From first call to final install, we make it easy.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {workSteps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <button
            className="px-12 cursor-pointer py-4 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-white/50 hover:bg-white/5 transition-all duration-300 mb-12"
            style={{
              boxShadow: `
                0px 4px 16px rgba(255, 255, 255, 0.1),
                0px 0px 0px 1px rgba(255, 255, 255, 0.05)
              `,
            }}
          >
            <Link href="/contact">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
