// lib/seo/pageData.js

import { WEBSITE_DETAILS } from "../constants";

// Company information for schema
export const companyInfo = {
  name: WEBSITE_DETAILS.NAME,
  url: WEBSITE_DETAILS.URL,
  telephone: "832 810 4045",
  address: {
    street: "22807 W Waterlake Drive",
    locality: "Richmond",
    region: "TX",
    postalCode: "77406",
  },
  description:
    "Premium whole-home WiFi installation and networking solutions for luxury homes in Houston and surrounding areas.",
  image: "https://luxifi.com/images/logo.png",
  logo: "https://luxifi.com/images/logo.png",
  // Business details for local SEO
  businessType: "LocalBusiness",
  serviceArea: ["Houston"],
  keywords: [
    "WiFi installation Houston",
    "home networking Richmond TX",
    "luxury home WiFi",
    "mesh network installation",
    "business WiFi setup",
    "network optimization",
  ],
};

// Generate LocalBusiness structured data
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${companyInfo.url}#business`,
    name: companyInfo.name,
    description: companyInfo.description,
    url: companyInfo.url,
    telephone: companyInfo.telephone,
    foundingDate: companyInfo.foundingDate,
    priceRange: companyInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.locality,
      addressRegion: companyInfo.address.region,
      postalCode: companyInfo.address.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.6386", // Richmond, TX coordinates
      longitude: "-95.7621",
    },
    areaServed: companyInfo.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: [
      "WiFi Installation",
      "Home Networking",
      "Network Optimization",
      "Mesh Network Setup",
      "Business WiFi Solutions",
    ],
    logo: {
      "@type": "ImageObject",
      url: companyInfo.logo,
    },
    image: {
      "@type": "ImageObject",
      url: companyInfo.image,
    },

    sameAs: [
      "https://www.facebook.com/luxifi",
      "https://www.linkedin.com/company/luxifi",
      "https://www.instagram.com/luxifi",
    ],
  };
}
