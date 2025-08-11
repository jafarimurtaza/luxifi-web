"use client";
import React from "react";
import { ImpactfulHeadline } from "../components/Layout/Footer/ImpactfulHeadline";
import { InquiryForm } from "../components/Layout/Footer/InquiryForm";
import { AssistanceButtons } from "../components/Layout/Footer/AssistanceButtons";
import { GeographicReach } from "../components/Layout/Footer/GeographicReach";
import Container from "../components/Layout/Container";

export default function Contact() {
  return (
    <Container>
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="flex flex-col justify-center space-y-8">
          <ImpactfulHeadline />
          <InquiryForm />
          <AssistanceButtons />
        </div>

        <GeographicReach />
      </main>
    </Container>
  );
}
