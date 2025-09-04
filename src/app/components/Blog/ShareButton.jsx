"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  MessageCircle,
  X,
} from "lucide-react";

export default function ShareButton({ post }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post?.title || "Check out this blog post";
  const shareDescription =
    post?.short_description || "Great insights on home networking";

  // Copy to clipboard
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Social media share URLs
  const socialButtons = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      color: "bg-blue-700 hover:bg-blue-800",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: `https://discord.com/channels/@me?message=${encodeURIComponent(
        `${shareTitle}\n${shareUrl}`
      )}`,
      color: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(
        `${shareTitle}\n\n${shareUrl}`
      )}`,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}&via=luxifi`,
      color: "bg-black hover:bg-gray-800",
    },
  ];

  return (
    <>
      {/* Share Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        aria-label="Open share options"
        className="flex items-center w-fit gap-2 px-4 py-2 bg-secondary/80 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer border border-secondary/20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Share2 className="w-4 h-4" />
        <h4 className="text-sm font-medium text-primary">Share</h4>
      </motion.button>

      {/* Popup Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close share popup overlay"
              role="button"
              tabIndex={0}
            />

            {/* Popup Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close share popup"
                className="absolute top-4 right-4 p-2 cursor-pointer hover:bg-base-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-base-content/60" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                  Share this post
                </h3>
                <p className="text-sm text-center text-gray-500 line-clamp-2">
                  {shareTitle}
                </p>
              </div>

              {/* Social Media Buttons */}
              <div className="space-y-3 mb-4">
                {socialButtons.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share this post on ${social.name}`}
                    className={`flex items-center gap-3 p-4 rounded-xl text-white transition-all duration-300 ${social.color} w-full`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">Share on {social.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Copy Link Button */}
              <motion.button
                onClick={handleCopyLink}
                aria-label="Copy link to clipboard"
                className="w-full cursor-pointer flex items-center justify-center gap-3 p-4 rounded-xl bg-base-200 hover:bg-base-300 text-base-content transition-all duration-300 border border-base-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Copy className="w-5 h-5" />
                <span className="font-medium">
                  {copied ? "Link copied!" : "Copy link"}
                </span>
                {copied && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-green-600 text-sm"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
