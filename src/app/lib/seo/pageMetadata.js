// lib/seo/pageMetadata.js
import { WEBSITE_URL_DETAILS } from "../constants";
import { getMetadata } from "./getMetadata";

// Metadata configurations for each page
export const pageMetadata = {
  home: getMetadata({
    title: "Luxifi — Premium Home WiFi Installation Houston",
    description:
      "Experience the connectivity you deserve with professional WiFi solutions tailored for your luxury home. Expert installation and optimization in Houston.",
    canonical: WEBSITE_URL_DETAILS.URL,
    keywords: [
      "luxury home WiFi",
      "premium WiFi installation",
      "Houston WiFi installer",
      "whole home WiFi",
      "professional network installation",
    ],
    image: `${WEBSITE_URL_DETAILS.URL}/images/home/logo.png`,
  }),

  tech: getMetadata({
    title: "Technology & Equipment",
    description:
      "Discover the enterprise-grade WiFi technology and equipment we use to deliver exceptional connectivity for luxury homes.",
    canonical: `${WEBSITE_URL_DETAILS.URL}/tech`,
    keywords: [
      "WiFi technology",
      "enterprise WiFi equipment",
      "luxury home networking",
      "professional WiFi hardware",
    ],
    image: `${WEBSITE_URL_DETAILS.URL}/images/tech/intro-house-image.jpg`,
  }),

  approach: getMetadata({
    title: "Our Approach",
    description:
      "Learn about our comprehensive approach to designing and installing premium WiFi solutions for luxury homes.",
    canonical: `${WEBSITE_URL_DETAILS.URL}/approach`,
    keywords: [
      "WiFi installation approach",
      "network design process",
      "luxury home WiFi planning",
      "professional WiFi consultation",
    ],
    image: `${WEBSITE_URL_DETAILS.URL}/images/approach/villa-house.jpg`,
  }),

  maintenance: getMetadata({
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance and support services to keep your luxury home WiFi network performing at its best.",
    canonical: `${WEBSITE_URL_DETAILS.URL}/maintenance`,
    keywords: [
      "WiFi maintenance",
      "network support",
      "WiFi troubleshooting",
      "luxury home network care",
    ],
    image: `${WEBSITE_URL_DETAILS.URL}/images/maintenance/maintenace-hero-image.webp`,
  }),

  contact: getMetadata({
    title: "Contact Us",
    description:
      "Get in touch with Houston's premier WiFi installation experts. Free consultation and custom network design for your luxury home.",
    canonical: `${WEBSITE_URL_DETAILS.URL}/contact`,
    keywords: [
      "WiFi installer contact",
      "Houston WiFi consultation",
      "luxury home WiFi quote",
      "network installation inquiry",
    ],
    image: `${WEBSITE_URL_DETAILS.URL}/images/contact/hero-image.jpg`,
  }),
};
