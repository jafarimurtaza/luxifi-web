"use client";

import { services } from "../../../lib/data/homedata";
import { useState, useEffect, useRef } from "react";
import { ServiceCard } from "./ServiceCard";
import LinearRight from "../../Layout/Images/LinearRight";
import Link from "next/link";

export default function CoreServicesSection() {
  const [visibleServices, setVisibleServices] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceIndex = Number.parseInt(
              entry.target.dataset.serviceIndex
            );
            setVisibleServices((prev) => new Set([...prev, serviceIndex]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const serviceElements = sectionRef.current?.querySelectorAll(
      "[data-service-index]"
    );
    serviceElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-primary pt-3 px-3">
      <LinearRight />
      <div className="container mx-auto px-6 py-18 " ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-0">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight animate-fade-in-up">
            <span className=" bg-clip-text text-primary capitalize">core services</span>
            <br />
            <span className="bg-gradient-to-r text-base-content bg-clip-text capitalize">
              we specialize in:
            </span>
          </h2>
        </div>

        {/* Services List */}
        {services.map((service, index) => (
          <div key={service.id} data-service-index={index} className="relative">
            <ServiceCard
              service={service}
              index={index}
              isVisible={visibleServices.has(index)}
            />
          </div>
        ))}

        <div className="w-full mx-auto flex items-center justify-center md:mt-10 mt-24">
          <button className="group mx-auto px-3 md:px-6 cursor-pointer py-3 md:py-4 border-2 border-white/30 text-primary font-semibold rounded-lg transition-all duration-300 hover:border-base-200 hover:shadow-lg hover:scale-105">
            <Link href="/contact">
              <span className="flex items-center gap-3">LEARN MORE</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
