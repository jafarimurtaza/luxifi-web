"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";
import SectionTitle from "../Layout/Titles/SectionTitle";
import ComparisonTable from "./ComparisonTable";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const guaranteeItems = [
  {
    id: 1,
    title: "BUILT BY SPECIALISTS",
    description:
      "We don't \"also do WiFi\" — it's our core. Every decision is made to ensure a fast, stable, and future-ready network tailored to your home.",
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

const GuaranteeIcon = ({ iconType, className = "" }) => {
  const getIconContent = (type) => {
    switch (type) {
      case "network":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-8 border-2 border-current rounded-full"></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-current rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-current rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-current rounded-full"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-current rounded-full"></div>
            </div>
          </div>
        );
      case "results":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-current rounded-full relative">
              <div className="absolute top-2 left-4 w-3 h-1 bg-current rounded"></div>
            </div>
          </div>
        );
      case "delivery":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-6 border-2 border-current rounded"></div>
              <div className="absolute top-1 left-1 right-1 h-1 bg-current rounded"></div>
              <div className="absolute bottom-1 left-1 right-1 h-1 bg-current rounded"></div>
              <div className="absolute -right-2 top-1 w-3 h-4 bg-current rounded-r"></div>
            </div>
          </div>
        );
      case "turnkey":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-6 border-2 border-current rounded-t-lg"></div>
              <div className="w-10 h-2 bg-current rounded-b-lg -mt-1"></div>
            </div>
          </div>
        );
      case "hardware":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-10 h-6 border-2 border-current rounded relative">
              <div className="absolute inset-1 grid grid-cols-3 gap-0.5">
                <div className="w-1 h-1 bg-current rounded-full"></div>
                <div className="w-1 h-1 bg-current rounded-full"></div>
                <div className="w-1 h-1 bg-current rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case "battery":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-6 h-10 border-2 border-current rounded"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-1 bg-current rounded-t"></div>
              <div className="absolute bottom-2 left-1 right-1 h-1 bg-current rounded"></div>
            </div>
          </div>
        );
      case "cloud":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-5 bg-current rounded-full"></div>
              <div className="absolute top-2 left-1 w-6 h-4 bg-current rounded-full"></div>
              <div className="absolute top-1 right-0 w-4 h-3 bg-current rounded-full"></div>
            </div>
          </div>
        );
      case "security":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-10 border-2 border-current rounded-t-full"></div>
              <div className="absolute bottom-0 left-1 w-6 h-6 border-2 border-current rounded"></div>
              <div className="absolute bottom-2 left-3 w-2 h-2 bg-current rounded-full"></div>
            </div>
          </div>
        );
      case "outdoor":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-10 h-6 border-2 border-current rounded-lg"></div>
              <div className="absolute top-1 left-1 right-1 h-1 bg-current rounded"></div>
              <div className="absolute bottom-1 left-2 right-2 h-1 bg-current rounded"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-current rounded-full"></div>
          </div>
        );
    }
  };

  return (
    <div
      className={`w-24 h-24 rounded-full bg-transparent border-2 border-primary flex items-center justify-center text-primary ${className}`}
    >
      {getIconContent(iconType)}
    </div>
  );
};

function HeroContent() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "🎯",
      title: "Expert Engineering",
      description: "Professional-grade network design",
    },
    {
      icon: "❤️",
      title: "Human-Centered Care",
      description: "Personalized support every step",
    },
    {
      icon: "⚡",
      title: "Invisible WiFi",
      description: "Seamless connectivity you never think about",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={itemVariants}
      className="mx-auto px-4 sm:px-6 lg:px-8 my-16"
    >
      <div className="text-center space-y-12">
        {/* Main Title with Interactive Elements */}
        <motion.div variants={itemVariants} className="relative">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <SectionTitle title="How We Set the Bar" />
          </motion.h2>

          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-accent mb-8"
            whileHover={{ y: -2 }}
          >
            Luxury-Grade Connectivity, Delivered with Heart.
          </motion.h3>
        </motion.div>

        {/* Interactive Feature Highlights */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeFeature === index
                  ? "bg-primary/10 border-2 border-primary shadow-lg shadow-primary/20"
                  : "bg-base-200/50 border-2 border-transparent hover:border-primary/30"
              }`}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              onClick={() => setActiveFeature(index)}
            >
              <motion.div
                className="text-4xl mb-3"
                animate={
                  activeFeature === index
                    ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>

              <h4 className="text-lg font-bold text-primary mb-2">
                {feature.title}
              </h4>

              <p className="text-sm text-base-content/80">
                {feature.description}
              </p>

              {activeFeature === index && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(var(--p)/0.1), transparent)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Main Description with Interactive Elements */}
        <motion.div
          variants={itemVariants}
          className="max-w-5xl mx-auto space-y-8"
        >
          <motion.div
            className="bg-gradient-to-r from-base-200/50 to-base-300/30 p-8 rounded-3xl backdrop-blur-sm border border-primary/10"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-lg sm:text-xl md:text-2xl leading-relaxed text-base-content mb-6"
              variants={itemVariants}
            >
              At Luxifi, our difference isn't just in what we install — it's in{" "}
              <motion.span
                className="text-primary font-semibold"
                whileHover={{ scale: 1.05 }}
                style={{ display: "inline-block" }}
              >
                how we show up
              </motion.span>
              . We combine expert engineering with human-centered care, ensuring
              every client feels heard, supported, and delighted from the first
              call to the final test.
            </motion.p>

            {/* Animated Promise Statement */}
            <motion.div className="relative" whileHover={{ scale: 1.02 }}>
              <motion.p
                className="font-bold text-primary text-xl sm:text-2xl md:text-3xl leading-tight"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "linear-gradient(90deg, currentColor, #00d4ff, currentColor)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Our promise is simple: We make your WiFi invisible — because
                when it works flawlessly, you shouldn't have to think about it.
              </motion.p>

              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ zIndex: -1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Promise Section Component
const PromiseSection = () => (
  <motion.div
    variants={itemVariants}
    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-20"
  >
    <div className="text-center space-y-8">
      <SectionTitle title="Our Promise to You" />

      <motion.div
        variants={itemVariants}
        className="max-w-4xl mx-auto space-y-6"
      >
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-base-content mb-8">
          At Luxifi, we deliver more than WiFi — we bring confidence, clarity,
          and calm. From start to finish, we ensure peace of mind and seamless
          results.
        </p>
      </motion.div>
    </div>
  </motion.div>
);

// Guarantee Grid Card Component
const GuaranteeGridCard = ({ item }) => (
  <motion.div
    variants={cardVariants}
    className="flex flex-col items-center text-center p-6 space-y-4 hover:scale-105 transition-transform duration-300"
  >
    <GuaranteeIcon iconType={item.iconType} />
    <h3 className="text-lg sm:text-xl font-bold text-primary uppercase tracking-wide">
      {item.title}
    </h3>
    <p className="text-sm sm:text-base leading-relaxed text-base-content px-3">
      {item.description}
    </p>
  </motion.div>
);

export default function ApproachMain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <HeroContent />

        {/* Hero Image */}
        <motion.div variants={itemVariants}>
          <RenderBigIntroImage src="/images/approach/bar-1.jpg" />
        </motion.div>
      </motion.div>

      {/* Promise Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <PromiseSection />
      </motion.div>

      {/* Our Guarantee Section - Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="my-20 px-8"
      >
        <SectionTitle title="OUR GUARANTEE" />

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
        >
          {guaranteeItems.map((item) => (
            <GuaranteeGridCard key={item.id} item={item} />
          ))}
        </motion.div>
      </motion.div>

      {/* Comparison Table Section */}
      <ComparisonTable />
    </div>
  );
}
