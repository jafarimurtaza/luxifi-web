
"use client"

import { useState } from "react";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { TextAreaField } from "./TextAreaField";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 px-3" id="book-consultation">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Start Your <span className="text-primary">WiFi Journey</span>
          </h2>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-2xl border border-border animate-pulse-glow">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                name="name"
                placeholder="Murtaza jafari"
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="murtaza@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Company"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
              />
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+43 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <SelectField
              label="Service Interest"
              name="service"
              value={formData.service}
              onChange={handleChange}
              options={[
                { value: "", label: "Select a service" },
                { value: "enterprise-wifi", label: "Enterprise WiFi Solutions" },
                { value: "network-design", label: "Network Design & Planning" },
                { value: "wifi-installation", label: "WiFi Installation & Setup" },
                { value: "network-security", label: "Network Security Solutions" },
                { value: "maintenance", label: "Maintenance & Support" },
                { value: "consultation", label: "Technical Consultation" },
              ]}
            />

            <TextAreaField
              label="Project Details"
              name="message"
              placeholder="Tell us about your WiFi requirements..."
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="button"
              className="w-full cursor-pointer bg-primary hover:bg-text-base text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Submit
            </button>l
          </form>
        </div>
      </div>
    </section>
  );
}