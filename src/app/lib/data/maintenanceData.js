export const plans = [
  {
    id: 1,
    name: "LUXIFI BASIC CARE",
    priceMonthly: 19,
    priceAnnual: 228,
    description:
      "Simple support for simple setups. Ideal for smaller homes or early-stage systems, Basic Care ensures your core network stays smooth and supported with essentials handled remotely.",
    bestFor: ["5 or fewer access points", "1 or fewer VLANs", "Light-to-moderate firewall needs"],
    includes: ["Proactive outage alerts", "Remote troubleshooting", "Basic tuning and reporting", "Preferred support pricing"],
    buttonText: "SUBSCRIBE →",
  },
  {
    id: 2,
    name: "LUXIFI PLUS CARE",
    priceMonthly: 27,
    priceAnnual: 324,
    description:
      "Smart support for smart homes. Designed for homes with more devices, more complexity, and greater expectations. Plus Care keeps your system fine-tuned, secured, and professionally supported at all times.",
    bestFor: ["6 or more access points", "2 or more VLANs", "Advanced firewall and privacy needs"],
    includes: ["Everything in Basic", "Advanced firewall monitoring", "Faster support response", "Deeper analytics & optimization"],
    buttonText: "SUBSCRIBE →",
  },
  {
    id: 3,
    name: "LUXIFI CUSTOM CARE",
    priceMonthly: null,
    priceAnnual: null,
    description:
      "Tailored support for high-demand networks. For estate homes, large networks, or unique technical environments, we create a custom care plan to ensure uninterrupted performance, enhanced protection, and white-glove support.",
    bestFor: ["10+ access points", "4+ VLANs", "Customized security configurations"],
    includes: ["Everything in Plus", "Dedicated support advisor", "Quarterly system reviews", "Personalized service and oversight"],
    buttonText: "INQUIRE →",
  },
];

export const commonFeatures = [
  "Real-time outage detection",
  "Fast, expert-level response",
  "Regular remote performance tuning",
  "Silent background updates",
  "Detailed network health reporting",
  "Exclusive discounts on support services",
];

export const featureCards = [
  { title: "Expert support." },
  { title: "Proactive maintenance." },
  { title: "Long-term peace of mind." },
];
