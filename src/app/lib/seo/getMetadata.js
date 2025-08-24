// lib/seo/getMetadata.js
import { WEBSITE_DETAILS } from "../constants";
import { companyInfo, generateLocalBusinessSchema } from "./pageData";

export function getMetadata({
  title,
  description,
  canonical,
  keywords = [],
  image = "/og-default.jpg",
  type = "website",
  structuredData = null,
  author = WEBSITE_DETAILS.AUTHOR,
  publishedTime = null,
  modifiedTime = null,
  includeBusinessSchema = false,
}) {
  const baseTitle = title ? `${title} | Luxifi` : "Luxifi — Premium Home WiFi";
  const finalDescription =
    description ||
    "Premium whole-home WiFi installation in Houston — design, install, optimize.";

  // Merge business keywords with page-specific keywords
  const businessKeywords = includeBusinessSchema ? companyInfo.keywords : [];
  const allKeywords = [...new Set([...keywords, ...businessKeywords])];

  const metadata = {
    title: baseTitle,
    description: finalDescription,
    keywords: allKeywords.join(", "),

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
            : `${WEBSITE_DETAILS.URL}${image}`,
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
        image.startsWith("http") ? image : `${WEBSITE_DETAILS.URL}${image}`,
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

    // Additional metadata for business
    category: "Technology",
    classification: "WiFi Installation Services",

    // Set metadata base for relative URLs
    metadataBase: canonical ? new URL(canonical).origin : WEBSITE_DETAILS.URL,
  };

  // Add article-specific metadata for blog posts
  if (type === "article" && (publishedTime || modifiedTime)) {
    metadata.openGraph.publishedTime = publishedTime;
    metadata.openGraph.modifiedTime = modifiedTime || publishedTime;
    metadata.openGraph.authors = [author];
    metadata.openGraph.section = "WiFi & Networking";
    metadata.openGraph.tags = keywords;
  }

  // Add structured data
  const finalStructuredData = [];

  // Add business schema if requested
  if (includeBusinessSchema) {
    finalStructuredData.push(generateLocalBusinessSchema());
  }

  // Add custom structured data if provided
  if (structuredData) {
    if (Array.isArray(structuredData)) {
      finalStructuredData.push(...structuredData);
    } else {
      finalStructuredData.push(structuredData);
    }
  }

  // Add structured data to metadata if any exists
  if (finalStructuredData.length > 0) {
    metadata.other = {
      ...metadata.other,
      "application/ld+json": JSON.stringify(
        finalStructuredData.length === 1
          ? finalStructuredData[0]
          : finalStructuredData
      ),
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

// Helper function for business pages (homepage, services, contact)
export function getBusinessMetadata(pageData) {
  return getMetadata({
    title: pageData.title,
    description:
      pageData.description ||
      `${companyInfo.description} Serving ${companyInfo.serviceArea.join(
        ", "
      )}.`,
    canonical: pageData.canonical,
    keywords: pageData.keywords || companyInfo.keywords,
    image: pageData.image,
    type: "website",
    structuredData: pageData.structuredData,
    includeBusinessSchema: true,
  });
}
