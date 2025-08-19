"use client";

import { useBlogData } from "../../hooks/useBlogData";
import BlogSectionHeader from "./BlogSectionHeader";
import BlogSkeleton from "./BlogSkeleton";
import BlogError from "./BlogError";
import BlogGrid from "./BlogGrid";
import BlogLoadingStates from "./BlogLoadingStates";

export default function BlogSection({ posts }) {
  const {
    allPosts,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    fetchNextPage,
  } = useBlogData(posts);

  // Loading state
  if (status === "pending") {
    return <BlogSkeleton />;
  }

  // Error state
  if (status === "error") {
    return <BlogError error={error} onRetry={() => fetchNextPage()} />;
  }

  return (
    <section className="relative py-20 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            color: "var(--tw-base-content)",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <BlogSectionHeader />
        <BlogGrid posts={allPosts} />
        <BlogLoadingStates
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          allPostsLength={allPosts.length}
        />
      </div>
    </section>
  );
}
