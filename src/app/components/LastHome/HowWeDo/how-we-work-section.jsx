"use client"

import { motion } from "framer-motion"
import { SectionLayout } from "../luxifi/section-layout"
import { ProcessStepCard } from "./process-step-card"

export function HowWeWorkSection() {
  const accentColor = "#FCD34D"

  const steps = [
    {
      stepNumber: "01.",
      title: "CONSULTATION",
      description: "Fill out the form below to request a complimentary phone consult. We will call you at our earliest opportunity to answer questions about our products, service, price range, and approach."
    },
    {
      stepNumber: "02.",
      title: "ONSITE ASSESSMENT",
      description: "Our implementation specialist will visit your property to assess your space, including construction materials and their impact on WiFi signal quality. We'll answer any technical questions about the installation and provide a precise project estimate."
    },
    {
      stepNumber: "03.",
      title: "PROFESSIONAL INSTALLATION",
      description: "Once the estimate is approved, we schedule an installation date. Installations (including wiring + hardware installation and network configuration) in finished homes are typically completed within 1-2 days."
    }
  ]

  const handleLearnMore = () => {
    console.log("Learn More clicked for How We Work section")
    // Add navigation or specific action here
  }

  return (
    <SectionLayout backgroundColor="#0000" className="py-20">
     
      <div className="col-span-2 text-center mb-12">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          HOW WE WORK
        </motion.h2>
        <motion.p 
          className="text-lg text-base-content max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From first call to final install, we make it easy.
        </motion.p>
      </div>

      <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <ProcessStepCard
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            delay={index * 0.15}
          />
        ))}
      </div>

      <motion.div
        className="col-span-2 text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <button
          onClick={handleLearnMore}
          className="px-10 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          style={{ 
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid white",
            boxShadow: "0 0 20px rgba(255,255,255,0.1)",
          }}
        >
          LEARN MORE
        </button>
      </motion.div>
    </SectionLayout>
  )
}
