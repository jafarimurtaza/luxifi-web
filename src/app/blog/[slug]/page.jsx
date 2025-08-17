"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";

// All your blog posts data
const posts = [
  {
    image: "/images/blog/blog1.avif",
    slug: "boost-Wi-Fi-speed",
    title: "Choosing the Best WiFi Installation Service for Seamless Connectivity",
    date: "March 31, 2025",
    author: "Daniel",
    content: [
      {
        id: "intro",
        heading: "Eliminate WiFi Frustrations with the Right Installation Service",
        text: `Struggling with weak signals, internet interruptions, or slow WiFi speeds in your home? 
        You’re not alone. Many homeowners with large properties face these frustrating issues due to poor network setups. 
        A reliable WiFi installation service can eliminate these problems and ensure seamless connectivity throughout your home.`,
      },
      {
        id: "what-to-look-for",
        heading: "What to Look for in a WiFi Installation Service",
        text: `Not all providers offer the same level of expertise, hardware, or long-term support. 
        This article will guide you through the key factors to consider when selecting the right service.`,
        sub: [
          {
            id: "expertise",
            subheading: "Expertise and Experience",
            text: "Work with a provider experienced in installing networks for large homes...",
          },
          {
            id: "services",
            subheading: "Comprehensive Services",
            text: "Look for a service that goes beyond basic installation...",
          },
          {
            id: "equipment",
            subheading: "Use of High-Quality Equipment",
            text: "The choice of hardware matters. Providers using top-tier brands...",
          },
        ],
      },
    ],
  },
  {
    image: "/images/blog/blog2.avif",
    slug: "mesh-networking-future",
    title: "Mesh Networking: The Future of Home Internet",
    date: "March 28, 2025",
    author: "Daniel",
    content: [
      {
        id: "intro",
        heading: "What is Mesh Networking?",
        text: `Mesh WiFi systems use multiple nodes to create a single seamless network throughout your home, eliminating dead zones.`,
      },
      {
        id: "benefits",
        heading: "Benefits of Mesh Networks",
        text: `Mesh networks provide better coverage, easier management, and smoother connections for multiple devices.`,
        sub: [
          {
            id: "coverage",
            subheading: "Better Coverage",
            text: "Covers large homes efficiently without signal drop-offs...",
          },
          {
            id: "devices",
            subheading: "Supports Multiple Devices",
            text: "Handles many devices at once without slowing down...",
          },
        ],
      },
    ],
  },
  {
    image: "/images/blog/blog3.avif",
    slug: "secure-home-network",
    title: "Setting Up a Secure Home Network",
    date: "March 25, 2025",
    author: "Daniel",
    content: [
      {
        id: "intro",
        heading: "Why Security Matters",
        text: `Home networks are vulnerable to attacks. Securing your WiFi protects your data and devices.`,
      },
      {
        id: "tips",
        heading: "Security Tips",
        text: `Follow best practices to make your network secure.`,
        sub: [
          {
            id: "encryption",
            subheading: "Use WPA3 Encryption",
            text: "Always use the latest WiFi security standard...",
          },
          {
            id: "password",
            subheading: "Change Default Passwords",
            text: "Default passwords are easy to guess, always change them...",
          },
        ],
      },
    ],
  },
  {
    image: "/images/blog/blog4.avif",
    slug: "best-Wi-Fi-extenders",
    title: "Best Wi-Fi Extenders for Large Homes",
    date: "March 22, 2025",
    author: "Daniel",
    content: [
      {
        id: "intro",
        heading: "Why Use Wi-Fi Extenders?",
        text: `Extenders help increase signal range in large homes without replacing your main router.`,
      },
      {
        id: "top-picks",
        heading: "Our Top Picks",
        text: `We reviewed the best extenders for performance and reliability.`,
      },
    ],
  },
];

export default function BlogDetails() {
  const { slug } = useParams();
  const [tocOpen, setTocOpen] = useState(true);

  const post = posts.find((p) => p.slug === slug);

  if (!post)
    return <h1 className="text-center py-60 text-4xl">Post not found</h1>;

  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-primary">
        {/* Optional Hero Image */}
      {post.image && (
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-10">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      )}
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
        <span className="flex items-center gap-1">
          <AiOutlineCalendar size={16} /> {post.date}
        </span>
        <span className="flex items-center gap-1">
          <AiOutlineUser size={16} /> {post.author}
        </span>
      </div>

      {/* Table of Contents */}
      <div className="border rounded-2xl mb-10 p-2.5 shadow-lg shadow-gray-200">
        <button
          className="w-full flex justify-between items-center p-4 font-semibold text-left"
          onClick={() => setTocOpen(!tocOpen)}
        >
          What's This Article About
          <AiOutlineDown
            className={`ml-2 transition-transform duration-300 ${
            tocOpen ? "rotate-180" : ""
           }`}
            size={20} // icon size
          />
        </button>

        {tocOpen && (
          <ul className="px-6 pb-4 list-decimal space-y-2">
          {post.content.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:underline">
                {section.heading}
              </a>
              {section.sub && (
                <ul className="list-disc pl-6 mt-1">
                  {section.sub.map((sub) => (
                    <li key={sub.id}>
                      <a href={`#${sub.id}`} className="hover:underline">
                        {sub.subheading}
                      </a>
                    </li>
                  ))}
                </ul>
               )}
            </li>
            ))}
          </ul>
        )}
      </div>
      {/* Blog Content */}
      {post.content.map((section) => (
        <div key={section.id} id={section.id} className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
          <p className="mb-4">{section.text}</p>

          {section.sub &&
            section.sub.map((sub) => (
              <div key={sub.id} id={sub.id} className="mb-6">
                <h3 className="text-xl font-medium mb-2">{sub.subheading}</h3>
                <p>{sub.text}</p>
              </div>
            ))}
        </div>
      ))}
    </section>
  );
}
