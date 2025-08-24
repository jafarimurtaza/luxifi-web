import React from "react";
import { ContactHero } from "./ContactHero";
import ContactFooter from "./ContactFooter";
import ContactForm from "./ContactForm/ContactForm";

export default function ContactSection() {
  return (
    <div>
      <ContactHero backgroundVideo="/videos/contact.mp4" />
      <ContactForm />
      <ContactFooter />
    </div>
  );
}
