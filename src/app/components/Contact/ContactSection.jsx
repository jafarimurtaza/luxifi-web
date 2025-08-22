import React from "react";
import { ContactHero } from "./ContactHero";
import { ContactCards } from "./ContactCards";

import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";

export default function ContactSection() {
  return (
    <div>
      <ContactHero backgroundVideo="/videos/contact.mp4" />
      {/* <ContactCards /> */}
      <ContactForm />
      <ContactFooter />
    </div>
  );
}
