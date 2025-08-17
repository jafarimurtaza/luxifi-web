"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BlogSection({ posts }) {
  const router = useRouter();
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Latest Insights & Tips
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-base-content/80 to-base-content mx-auto rounded-full"></div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {currentPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
              onClick={() => router.push(`/blog/${post.slug}`)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-base-200/80 backdrop-blur border border-base-300/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-primary text-sm font-medium">
                    {post.date}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-base-content transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-base-content/80 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-base-content font-medium text-sm group-hover:text-base-content/80 transition-colors duration-300">
                      Read Article
                    </span>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-base-content/10 border border-base-content/20 flex items-center justify-center group-hover:bg-base-content/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="w-4 h-4 text-base-content"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-base-content/80 to-base-content transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center mt-16 gap-2"
          >
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                currentPage === 1
                  ? "border-base-300/30 text-base-content/30 cursor-not-allowed"
                  : "border-base-content/30 text-base-content hover:bg-base-content/10 hover:border-base-content/50"
              }`}
            >
              Previous
            </motion.button>

            {/* Page Numbers */}
            <div className="flex gap-2 mx-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <motion.button
                  key={num}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(num)}
                  className={`w-10 h-10 rounded-full border transition-all duration-300 ${
                    num === currentPage
                      ? "bg-gradient-to-r from-base-content/90 to-base-content text-primary border-transparent shadow-lg"
                      : "border-base-300/30 text-base-content hover:bg-base-200 hover:border-base-content/30 hover:text-base-content"
                  }`}
                >
                  {num}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                currentPage === totalPages
                  ? "border-base-300/30 text-base-content/30 cursor-not-allowed"
                  : "border-base-content/30 text-base-content hover:bg-base-content/10 hover:border-base-content/50"
              }`}
            >
              Next
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
