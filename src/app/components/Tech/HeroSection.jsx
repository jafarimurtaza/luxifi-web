"use client";

import SectionTitle from "../Layout/Titles/SectionTitle";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";
import LinearLeft from "../Layout/Images/LinearLeft";
import Description from "../Layout/Descriptions/Description";
import FeatureCards from "../Layout/Cards/FeatureCards";

const features = [
  { title: "Engineered to Perform." },
  { title: "Installed to Disappear." },
  { title: "Loved for the Experience." },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center md:min-h-screen md:justify-center px-4">
      <SectionTitle title="next level wifi" subTitle="tailored for you" />

      <Description description="Every product and service we offer is designed to give you one thing: effortless connection — everywhere in your home." />

      {/* Use FeatureCards component here */}
      <FeatureCards features={features} />

      <RenderBigIntroImage src="/images/tech/office-graphic.jpg" />
      <LinearLeft />
    </section>
  );
}
