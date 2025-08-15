"use client";

import BlogSection from "../components/Blog/BlogSection";
import HeroSection from "../components/Blog/HeroSection";
import IntroImage from "../components/Layout/Images/IntroImage";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "How to Boost Your Wi-Fi Speed at Home",
      excerpt:
        "Simple tricks and tools to improve your home connectivity without upgrading your plan.",
      image: "/images/blog/blog1.avif",
      date: "Aug 14, 2025",
      slug: "boost-Wi-Fi-speed",
    },
    {
      id: 2,
      title: "Mesh Networking: The Future of Home Internet",
      excerpt:
        "Discover how mesh Wi-Fi systems can help eliminate dead zones for good.",
      image: "/images/blog/blog2.avif",
      date: "Aug 12, 2025",
      slug: "mesh-networking-future",
    },
    {
      id: 3,
      title: "Setting Up a Secure Home Network",
      excerpt:
        "Learn how to protect your data and devices from online threats while staying connected.",
      image: "/images/blog/blog3.avif",
      date: "Aug 10, 2025",
      slug: "secure-home-network",
    },
    {
      id: 4,
      title: "Best Wi-Fi Extenders for Large Homes",
      excerpt:
        "Our top picks for devices that can boost your signal across multiple floors.",
      image: "/images/blog/blog4.avif",
      date: "Aug 8, 2025",
      slug: "best-Wi-Fi-extenders",
    },
    {
      id: 5,
      title: "Extra Post Example",
      excerpt: "An extra post to demonstrate pagination.",
      image: "/images/blog/blog1.avif",
      date: "Aug 7, 2025",
      slug: "extra-post",
    },
  ];

  return (
    <main className="bg-base-100 text-base-content">
      <IntroImage
        src={"/images/blog/hero.jpg"}
        alt="Hero Image - Blog"
        className="!top-0"
      />

      <HeroSection />
      <BlogSection posts={posts} />
    </main>
  );
}
