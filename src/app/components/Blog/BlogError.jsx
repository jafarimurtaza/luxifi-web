"use client";

import { motion } from "framer-motion";
import { AlertCircle, RefreshCw, Wifi, Globe } from "lucide-react";

function getErrorDetails(error) {
  const errorMessage = error?.message?.toLowerCase() || "";

  // Network-related errors
  if (
    errorMessage.includes("failed to fetch") ||
    errorMessage.includes("network")
  ) {
    return {
      title: "Connection Problem",
      message:
        "We're having trouble connecting to our servers. Please check your internet connection and try again.",
      icon: Wifi,
      suggestion: "Check your internet connection",
    };
  }

  // Server errors (5xx)
  if (
    errorMessage.includes("server") ||
    errorMessage.includes("500") ||
    errorMessage.includes("503")
  ) {
    return {
      title: "Server Temporarily Unavailable",
      message:
        "Our servers are taking a short break. We're working to get things back up and running.",
      icon: Globe,
      suggestion: "Please try again in a few moments",
    };
  }

  // Timeout errors
  if (errorMessage.includes("timeout")) {
    return {
      title: "Request Taking Too Long",
      message:
        "The page is taking longer than usual to load. This might be due to a slow connection.",
      icon: Wifi,
      suggestion: "Try refreshing the page",
    };
  }

  // Rate limiting
  if (errorMessage.includes("rate") || errorMessage.includes("limit")) {
    return {
      title: "Too Many Requests",
      message:
        "You're browsing a bit too fast! Please wait a moment before trying again.",
      icon: AlertCircle,
      suggestion: "Wait a moment and try again",
    };
  }

  // Default friendly error
  return {
    title: "Something Went Wrong",
    message:
      "We encountered an unexpected issue while loading the blog posts. Don't worry, it's probably temporary!",
    icon: AlertCircle,
    suggestion: "Try refreshing the page",
  };
}

export default function BlogError({ error, onRetry }) {
  const {
    title,
    message,
    icon: IconComponent,
    suggestion,
  } = getErrorDetails(error);

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20">
              <IconComponent className="w-10 h-10 text-orange-500" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-primary mb-4"
          >
            {title}
          </motion.h2>

          {/* User-friendly message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base-content/80 text-lg leading-relaxed mb-2"
          >
            {message}
          </motion.p>

          {/* Suggestion */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base-content/60 text-sm mb-8"
          >
            💡 {suggestion}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex items-center gap-2 px-8 py-4 bg-secondary cursor-pointer text-white rounded-xl hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-base"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
            )}

            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-8 py-4 bg-base-200 text-base-content rounded-xl hover:bg-base-300 transition-all duration-300 font-medium border border-base-300 text-base"
            >
              <Globe className="w-5 h-5" />
              Refresh Page
            </button>
          </motion.div>

          {/* Help text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 pt-6 border-t border-base-300/50"
          >
            <p className="text-xs text-base-content/50">
              Still having trouble? Try refreshing the page or check back in a
              few minutes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
