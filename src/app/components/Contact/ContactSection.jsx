import React from "react";
import { ContactHero } from "./ContactHero";


import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";

export default function ContactSection() {
  return (
    <div>
      <ContactHero backgroundVideo="/videos/contact.mp4" />
      <ContactForm />
      <ContactFooter />
    </div>
  );
}
