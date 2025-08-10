"use client"

import { services } from "../../../lib/data/homedata"
import { useState, useEffect, useRef } from "react"
import { ServiceCard } from "./ServiceCard"
import LinearRight from "../../Layout/Images/LinearRight"

export default function CoreServicesSection() {
  const [visibleServices, setVisibleServices] = useState(new Set())
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceIndex = Number.parseInt(entry.target.dataset.serviceIndex)
            setVisibleServices((prev) => new Set([...prev, serviceIndex]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const serviceElements = sectionRef.current?.querySelectorAll("[data-service-index]")
    serviceElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen text-primary pt-3 px-3">
        <LinearRight />
      <div className="container mx-auto px-6 py-18 " ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-0">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight animate-fade-in-up">
            <span className=" bg-clip-text text-primary">
              CORE SERVICES
            </span>
            <br />
            <span className="bg-gradient-to-r text-base-content bg-clip-text">
              WE SPECIALIZE IN:
            </span>
          </h2>
        </div>

        {/* Services List */}
          {services.map((service, index) => (
            <div key={service.id} data-service-index={index} className="relative">
              <ServiceCard service={service} index={index} isVisible={visibleServices.has(index)} />
            </div>
          ))}
        </div>
      </div>
   
  )
}
