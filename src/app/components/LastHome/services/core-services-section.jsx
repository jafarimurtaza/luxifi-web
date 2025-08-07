"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "./service-card"
import { SectionLayout } from "../luxifi/section-layout" 
import { Cable, Wifi, Camera } from 'lucide-react' 

export function CoreServicesSection() {
  const services = [
    {
      IconComponent: Cable, 
      title: "STRUCTURED CABLING",
      description: "We build your network from the ground up using the highest-quality copper cable or fiber cabling. It’s the invisible powerhouse behind your reliable, high-speed internet."
    },
    {
      IconComponent: Wifi, 
      title: "WHOLE-HOME WIFI",
      description: "We design and deploy cutting-edge UniFi systems for complete coverage, advanced control, and secure connectivity — at a price that makes sense."
    },
    {
      IconComponent: Camera, 
      title: "SMART SECURITY CAMERAS",
      description: "See your property from anywhere with Luxifi-installed UniFi Protect cameras. AI alerts, night vision, and remote access are just the beginning."
    }
  ]

  return (
    <SectionLayout backgroundColor="#000" className="py-20">
      <div className="col-span-2 text-center mb-12">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          CORE SERVICES WE SPECIALIZE IN:
        </motion.h2>
        <motion.p 
          className="text-lg text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Luxifi provides a comprehensive suite of services to ensure your home is connected, secure, and smart.
        </motion.p>
      </div>

      <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            IconComponent={service.IconComponent} 
            title={service.title}
            description={service.description}
            delay={index * 0.15} 
          />
        ))}
      </div>
    </SectionLayout>
  )
}
