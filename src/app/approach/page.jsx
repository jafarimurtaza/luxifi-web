import React from "react";
import HeroSection from "../components/Approcah/HeroSection";
import PromiseSection from "../components/Approcah/Promise/PromiseSection";
import FAQComponent from "../components/Tech/FAQ/FAQComponent";
import { faqCategories } from "../lib/data/faqData";
import HowWeWork from "../components/HomeMain/HowWeDo/HowWeWork";
import { pageMetadata } from "../lib/seo/pageMetadata";

export const metadata = pageMetadata.approach;

export default function Approach() {
  return (
    <>
      <HeroSection />
      <HowWeWork />
      <PromiseSection />
      <FAQComponent
        title={faqCategories.approach.title}
        categories={faqCategories.approach.categories}
      />
    </>
  );
}
