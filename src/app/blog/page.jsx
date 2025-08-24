import BlogSection from "../components/Blog/BlogSection";
import HeroSection from "../components/Blog/HeroSection";
import { getBlogPosts } from "../lib/apiCleint";

export default async function BlogPage() {
  const blogData = await getBlogPosts();

  console.log("blogData", blogData);
  return (
    <main className="bg-base-100 text-base-content">
      <HeroSection />
      <BlogSection posts={blogData?.data} />
    </main>
  );
}
