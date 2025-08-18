"use client";

import { motion } from "framer-motion";
import { FileQuestion, ArrowLeft, Home, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogNotFound() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 mt-48 lg:mt-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border border-primary/20">
              <FileQuestion className="w-12 h-12 text-primary" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Blog Post Not Found
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-base-content/70 leading-relaxed max-w-lg mx-auto"
          >
            The blog post you're looking for doesn't exist or may have been
            moved. Let's get you back to exploring our latest insights.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <button
              onClick={() => router.back()}
              className="flex items-center cursor-pointer gap-2 px-6 py-3 bg-secondary  rounded-xl hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>

            <button
              onClick={() => router.push("/blog")}
              className="flex items-center gap-2 px-6 cursor-pointer py-3 bg-base-200 text-base-content rounded-xl hover:bg-base-300 transition-all duration-300 font-medium border border-base-300"
            >
              <Search className="w-4 h-4" />
              Browse All Blogs
            </button>

            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 px-6 py-3 cursor-pointer text-base-content/70 hover:text-primary transition-colors duration-300 font-medium"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-8"
          >
            <div className="w-32 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
