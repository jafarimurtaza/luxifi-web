"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function BlogGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center text-base-content/80 mx-auto">
        No blogs available
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {posts.map((post, index) => (
        <BlogCard
          key={`${post.documentId || post.id}-${index}`}
          post={post}
          index={index}
        />
      ))}
    </motion.div>
  );
}
