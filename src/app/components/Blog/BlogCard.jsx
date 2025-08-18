"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { formatDate } from "../../lib/utils/dateFormatter";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogCard({ post, index }) {
  const router = useRouter();

  return (
    <motion.article
      key={`${post.documentId}-${index}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="group cursor-pointer"
      onClick={() => router.push(`/blog/${post.slug}`)}
    >
      <div className="relative rounded-2xl overflow-hidden bg-base-200/80 backdrop-blur border border-base-300/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        {/* Image Section */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={post.cover_image?.url || post.cover_image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

          {/* Date Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-primary text-sm font-medium">
            {formatDate(post.publishedAt)}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-base-content transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-base-content/80 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
            {post.short_description}
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
  );
}
