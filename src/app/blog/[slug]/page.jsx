import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";
import BlogDetailsHero from "../../components/Blog/BlogDetailsHero";
import BlogDetailsSkeleton from "../../components/Blog/BlogDetailsSkeleton";
import BlogNotFound from "../../components/Blog/BlogNotFound";
import { getBlogDetails } from "../../lib/apiCleint";
import { WEBSITE_DETAILS } from "../../lib/constants";
import { getBlogMetadata } from "../../lib/seo/getMetadata";

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
    const keywords = post.keywords?.map((keyword) => keyword.name) || [
      "WiFi",
      "networking",
      "home network",
      "luxury networking",
    ];

    // Create optimized title (under 60 characters for Google)
    const title =
      post.title.length > 55 ? post.title.substring(0, 55) + "..." : post.title;

    // Create optimized description (under 160 characters)
    const description =
      post.short_description.length > 155
        ? post.short_description.substring(0, 155) + "..."
        : post.short_description;

    // Create canonical URL
    const canonical = `${WEBSITE_DETAILS.URL}/blog/${post.slug}`;

    // Image URL
    const image = post.cover_image?.url || "/images/blog/default-og.jpg";

    // Use the new helper function
    return getBlogMetadata({
      title,
      description,
      canonical,
      keywords,
      image,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      author: WEBSITE_DETAILS.AUTHOR,
      structuredData: {
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
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Organization",
          name: "Luxifi",
          url: WEBSITE_DETAILS.URL,
        },
        publisher: {
          "@type": "Organization",
          name: "Luxifi",
          url: WEBSITE_DETAILS.URL,
          logo: {
            "@type": "ImageObject",
            url: WEBSITE_DETAILS.LOGO,
            width: 512,
            height: 512,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonical,
        },
        keywords: keywords.join(", "),
        articleSection: "Home Networking",
        wordCount: post.content?.length || 0,
      },
    });
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog | Luxifi",
      description: "Discover networking insights and tips from Luxifi's blog.",
    };
  }
}
