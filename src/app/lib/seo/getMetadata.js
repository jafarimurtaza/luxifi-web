// lib/seo/getMetadata.js
import { WEBSITE_URL_DETAILS } from "../constants";

export function getMetadata({
  title,
  description,
  canonical,
  keywords = [],
  image = "/og-default.jpg",
  type = "website",
  structuredData = null,
  author = "Luxifi Team",
  publishedTime = null,
  modifiedTime = null,
}) {
  const baseTitle = title ? `${title} | Luxifi` : "Luxifi — Premium Home WiFi";
  const finalDescription =
    description ||
    "Premium whole-home WiFi installation in Houston — design, install, optimize.";

  const metadata = {
    title: baseTitle,
    description: finalDescription,
    keywords: keywords.join(", "),

    // Canonical URL
    alternates: { canonical },

    // Open Graph metadata
    openGraph: {
      title: baseTitle,
      description: finalDescription,
      url: canonical,
      siteName: "Luxifi",
      type,
      locale: "en_US",
      images: [
        {
          url: image.startsWith("http")
            ? image
            : `${WEBSITE_URL_DETAILS.URL}${image}`,
          width: 1200,
          height: 630,
          alt: title || "Luxifi - Premium WiFi Installation",
        },
      ],
    },

    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: finalDescription,
      images: [
        image.startsWith("http") ? image : `${WEBSITE_URL_DETAILS.URL}${image}`,
      ],
      creator: "@luxifi",
      site: "@luxifi",
    },

    // Robots directives
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Additional metadata
    category: "Technology",
    classification: "WiFi Installation Services",

    // Set metadata base for relative URLs
    metadataBase: canonical
      ? new URL(canonical).origin
      : WEBSITE_URL_DETAILS.URL,
  };

  // Add article-specific metadata for blog posts
  if (type === "article" && (publishedTime || modifiedTime)) {
    metadata.openGraph.publishedTime = publishedTime;
    metadata.openGraph.modifiedTime = modifiedTime || publishedTime;
    metadata.openGraph.authors = [author];
    metadata.openGraph.section = "WiFi & Networking";
    metadata.openGraph.tags = keywords;
  }

  // Add structured data if provided
  if (structuredData) {
    metadata.other = {
      ...metadata.other,
      "application/ld+json": JSON.stringify(structuredData),
    };
  }

  return metadata;
}

// Helper function for blog posts
export function getBlogMetadata(blogData) {
  return getMetadata({
    title: blogData.title,
    description: blogData.description,
    canonical: blogData.canonical,
    keywords: blogData.keywords,
    image: blogData.image,
    type: "article",
    publishedTime: blogData.publishedTime,
    modifiedTime: blogData.modifiedTime,
    author: blogData.author,
    structuredData: blogData.structuredData,
  });
}
