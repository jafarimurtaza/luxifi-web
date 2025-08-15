"use client";
import ContactSection from "../components/Contact/ContactSection";


export default function Contact() {
  return (
    <div className="min-h-screen max-w-full md:max-w-[2400px] mx-auto">
      {/* <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="flex flex-col justify-center space-y-8">
          <ImpactfulHeadline />
          <InquiryForm />
          <AssistanceButtons />
        </div>
        <GeographicReach />
      </main> */}

    
      <ContactSection />
      
    </div>
  );
}
