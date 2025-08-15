"use client"
import { motion } from "framer-motion"
import { MapPin, Clock, Wifi } from "lucide-react"
import { ContactCardItem } from "./ContactCardItem"

const defaultCards = [
  {
    icon: MapPin,
    title: "Service Area",
    subtitle: "We cover your region",
    details: "Nationwide WiFi Solutions\nCommercial & Residential",
    action: "Check Coverage",
  },
  {
    icon: Clock,
    title: "Support Hours",
    subtitle: "Mon - Fri: 8am - 8pm",
    details: "Emergency Support: 24/7\nWeekends: 9am - 5pm",
    action: "Get Support",
  },
  {
    icon: Wifi,
    title: "WiFi Solutions",
    subtitle: "Enterprise Grade",
    details: "info@wifisolutions.com\n+1 (555) WIFI-PRO",
    action: "Get Quote",
  },
]

export function ContactCards({ title = "GET IN TOUCH", cards = defaultCards } = {}) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-4">{title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <ContactCardItem key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
