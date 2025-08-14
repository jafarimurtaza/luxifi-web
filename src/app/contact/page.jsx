"use client";
import { AssistanceButtons } from "../components/Layout/Footer/AssistanceButtons";
import { GeographicReach } from "../components/Layout/Footer/GeographicReach";
import { ImpactfulHeadline } from "../components/Layout/Footer/ImpactfulHeadline";
import { InquiryForm } from "../components/Layout/Footer/InquiryForm";

export default function Contact() {
  return (
    <div className="min-h-screen max-w-full md:max-w-[2400px] mx-auto">
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="flex flex-col justify-center space-y-8">
          <ImpactfulHeadline />
          <InquiryForm />
          <AssistanceButtons />
        </div>

        <GeographicReach />
      </main>
    </div>
  );
}
