"use client";
import { ConsultationBooking } from "../components/Contact/ConsultationBooking";
import { ContactHero } from "../components/Contact/ContactHero";
import ContactSection from "../components/Contact/ContactSection";


export default function Contact() {
  return (
    <div className="min-h-screen max-w-full md:max-w-[2400px] mx-auto">
   

    {/* first try this */}
      <ContactSection />

      {/* then this if this confirmed i will be work on this more... */}
       {/* <ContactHero backgroundImage="/images/home/balckbackground.jpeg" />
      <ConsultationBooking /> */}
    </div>
  );
}
