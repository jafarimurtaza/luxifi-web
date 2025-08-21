// lib/seo/schema.js
export function createLocalBusinessSchema({
  name,
  description,
  url,
  telephone,
  address,
  image,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    url,
    telephone,
    image: [image],
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
    },
    areaServed: { "@type": "City", name: address.locality },
  };
}

export function createFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
