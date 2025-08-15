"use client";

import { motion } from "framer-motion";
import Description from "../../Layout/Descriptions/Description";
import LinearLeft from "../../Layout/Images/LinearLeft";
import SectionTitle from "../../Layout/Titles/SectionTitle";
import PromiseOrbit from "./PromiseOrbit";

const promiseItems = [
  {
    id: 1,
    title: "BUILT BY SPECIALISTS",
    description:
      "We don't \"also do Wi-Fi\" — it's our core. Every decision is made to ensure a fast, stable, and future-ready network tailored to your home.",
    iconType: "network",
  },
  {
    id: 2,
    title: "ZERO DEAD ZONES",
    description:
      "We guarantee full-home coverage and fast speeds. If something isn't right, we fix it quickly — no excuses, no confusion, just results.",
    iconType: "results",
  },
  {
    id: 3,
    title: "FULL-SERVICE DELIVERY",
    description:
      "From cabling to setup, we handle every step with precision. No chasing vendors or guesswork — just expert execution from day one.",
    iconType: "delivery",
  },
  {
    id: 4,
    title: "TURNKEY EXECUTION",
    description:
      "With decades of combined experience in construction, network engineering, data cabling, and network design, we handle the process from start to finish.",
    iconType: "turnkey",
  },
  {
    id: 5,
    title: "PREMIUM HARDWARE ONLY",
    description:
      "We install UniFi professional-grade gear that's sleek, reliable, and powerful — all without the inflated cost of enterprise systems.",
    iconType: "hardware",
  },
  {
    id: 6,
    title: "OUTAGE PROTECTION",
    description:
      "If power or internet drops, your system switches to backup instantly, keeping you connected during life's most important moments.",
    iconType: "battery",
  },
  {
    id: 7,
    title: "PROACTIVE SUPPORT",
    description:
      "We monitor your system remotely, update it as needed, and often fix issues before you notice. Your network always stays at its best.",
    iconType: "cloud",
  },
  {
    id: 8,
    title: "SECURITY THAT FITS YOU",
    description:
      "From guest access to parental controls, your network is customized for your lifestyle, privacy, and the safety of your family.",
    iconType: "security",
  },
  {
    id: 9,
    title: "OUTDOOR & INDOOR",
    description:
      "Unlike most consumer mesh products, our outdoor access points are water-resistant, ensuring you coverage for your yard, pool, and patio.",
    iconType: "outdoor",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PromiseSection() {
  return (
    <>
      <motion.section
        id="promise"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="my-20 px-8 max-w-7xl mx-auto"
      >
        <SectionTitle title="our promise" textClassName="text-white" />
        <Description
          textClassName="text-white/90"
          description="At Luxifi, we deliver more than Wi-Fi — we bring confidence, clarity, and calm. From start to finish, we ensure peace of mind and seamless results."
          className="mx-auto text-center"
        />

        {/* Orbit on large screens, grid on small */}
        <div className="mt-10">
          <PromiseOrbit items={promiseItems} />
        </div>
      </motion.section>
      <LinearLeft />
    </>
  );
}
