"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BlogSection({ posts }) {
  const router = useRouter();
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="container mx-auto px-6 pb-16 mt-16">
      {/* Blog Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {currentPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-base-content/90 rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={index}
          >
            <div
              className="relative w-full aspect-[16/9] cursor-pointer"
              onClick={() => router.push(`/blog/${post.slug}`)}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow justify-between text-primary">
              <div>
                <span className="text-sm opacity-70">{post.date}</span>
                <h2
                  className="mt-2 text-lg font-bold cursor-pointer"
                  onClick={() => router.push(`/blog/${post.slug}`)}
                >
                  {post.title}
                </h2>
                <p className="mt-2 text-sm">{post.excerpt}</p>
              </div>
              <div
                className="mt-4 text-sm opacity-80 cursor-pointer font-medium hover:underline"
                onClick={() => router.push(`/blog/${post.slug}`)}
              >
                Read More →
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <motion.button
              key={num}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-1 border rounded ${
                num === currentPage
                  ? "text-primary border-primary"
                  : "border-base-content/20 text-base-content hover:bg-base-content/10"
              }`}
            >
              {num}
            </motion.button>
          ))}
        </div>
      )}
    </section>
  );
}
