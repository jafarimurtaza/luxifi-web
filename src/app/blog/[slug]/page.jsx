import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";
import BlogDetailsHero from "../../components/Blog/BlogDetailsHero";
import BlogDetailsSkeleton from "../../components/Blog/BlogDetailsSkeleton";
import BlogNotFound from "../../components/Blog/BlogNotFound";
import { getBlogDetails } from "../../lib/apiCleint";

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const blogDetails = await getBlogDetails(slug);
  const post = blogDetails?.data?.[0];

  if (!blogDetails || blogDetails.error) {
    return <BlogDetailsSkeleton />;
  }

  if (!post) {
    return <BlogNotFound />;
  }

  return (
    <section className="max-w-6xl mx-auto my-36 px-6">
      <BlogDetailsHero post={post} />
      <BlogDetailsContent content={post.content} />
    </section>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const blogDetails = await getBlogDetails(slug);
    const post = blogDetails?.data?.[0];

    if (!post) {
      return {
        title: "Blog Post Not Found | Luxifi",
        description:
          "The requested blog post could not be found. Explore our other networking insights and tips.",
      };
    }

    // Extract keywords for better SEO
    const keywords =
      post.keywords?.map((keyword) => keyword.name).join(", ") ||
      "WiFi, networking, home network, luxury networking";

    // Create optimized title (under 60 characters for Google)
    const title =
      post.title.length > 55
        ? `${post.title.substring(0, 55)}... | Luxifi`
        : `${post.title} | Luxifi`;

    // Create optimized description (under 160 characters)
    const description =
      post.short_description.length > 155
        ? `${post.short_description.substring(0, 155)}...`
        : post.short_description;

    // Format publication date
    const publishedTime = post.publishedAt;
    const modifiedTime = post.updatedAt;

    // Create canonical URL
    const canonicalUrl = `https://luxifi.com/blog/${post.slug}`;

    return {
      title,
      description,
      keywords,

      // Open Graph (Facebook, LinkedIn, etc.)
      openGraph: {
        title: post.title,
        description: post.short_description,
        url: canonicalUrl,
        siteName: "Luxifi",
        type: "article",
        publishedTime,
        modifiedTime,
        authors: ["Luxifi Team"],
        section: "Networking",
        tags: post.keywords?.map((keyword) => keyword.name) || [
          "WiFi",
          "Networking",
        ],
        images: [
          {
            url: post.cover_image?.url || "/images/blog/default-og.jpg",
            width: post.cover_image?.width || 1200,
            height: post.cover_image?.height || 630,
            alt: post.title,
          },
        ],
      },

      // Twitter Card
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.short_description,
        images: [post.cover_image?.url || "/images/blog/default-twitter.jpg"],
        creator: "@luxifi",
        site: "@luxifi",
      },

      // Additional SEO metadata
      alternates: {
        canonical: canonicalUrl,
      },

      // Article-specific metadata
      other: {
        "article:published_time": publishedTime,
        "article:modified_time": modifiedTime,
        "article:author": "Luxifi Team",
        "article:section": "Home Networking",
        "article:tag": keywords,

        // Schema.org structured data
        "application-ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.short_description,
          image: {
            "@type": "ImageObject",
            url: post.cover_image?.url,
            width: post.cover_image?.width,
            height: post.cover_image?.height,
          },
          datePublished: publishedTime,
          dateModified: modifiedTime,
          author: {
            "@type": "Organization",
            name: "Luxifi",
            url: "https://luxifi.com",
          },
          publisher: {
            "@type": "Organization",
            name: "Luxifi",
            url: "https://luxifi.com",
            logo: {
              "@type": "ImageObject",
              url: "https://luxifi.com/logo.png",
              width: 512,
              height: 512,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
          },
          keywords: keywords,
          articleSection: "Home Networking",
          wordCount: post.content?.length || 0,
        }),
      },

      // Robots directive
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
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog | Luxifi",
      description: "Discover networking insights and tips from Luxifi's blog.",
    };
  }
}
