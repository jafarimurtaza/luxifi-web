"use client"
import { useState } from "react"
import { InfoSection } from "./InfoSection"
import { FormSection } from "./FormSection"

const defaultContactInfo = {
  email: "hello@luxifi.us",
  phone: "832-810-4045",
}

export function ContactForm({
  title = "GET IN TOUCH",
  description = "Professional WiFi installation and support services for Houston and surrounding areas. Fast, reliable connections done right the first time.",
  contactInfo = defaultContactInfo,
  onSubmit,
} = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    serviceAddress: "",
    comment: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Default behavior
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
      setFormData({ firstName: "", lastName: "", email: "", serviceAddress: "", comment: "" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <FormSection
            formData={formData}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <InfoSection title={title}  description={description} contactInfo={contactInfo} />
        </div>
      </div>
    </section>
  )
}





