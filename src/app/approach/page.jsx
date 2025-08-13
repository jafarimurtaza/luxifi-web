import React from "react";
import HeroSection from "../components/Approcah/HeroSection";
import PromiseSection from "../components/Approcah/Promise/PromiseSection";
import IntroImage from "../components/Layout/Images/IntroImage";
import FAQComponent from "../components/Tech/FAQ/FAQComponent";
import { faqCategories } from "../lib/data/faqData";

export default function Approach() {
  return (
    <>
      <IntroImage src={"/images/approach/villa-house.jpg"} alt="Hero Image" />
      <HeroSection />
      <PromiseSection />
      <FAQComponent
        title={faqCategories.approach.title}
        categories={faqCategories.approach.categories}
      />
    </>
  );
}
