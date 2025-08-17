import BlogSection from "../components/Blog/BlogSection";
import HeroSection from "../components/Blog/HeroSection";
import IntroImage from "../components/Layout/Images/IntroImage";
import getBlogPosts from "../lib/apiCleint";

export default async function BlogPage() {
  const blogData = await getBlogPosts();

  console.log("blogData", blogData);

  return (
    <main className="bg-base-100 text-base-content">
      <IntroImage
        src={"/images/blog/hero.jpg"}
        alt="Hero Image - Blog"
        className="!top-0"
      />

      <HeroSection />
      <BlogSection posts={blogData?.data} />
    </main>
  );
}
