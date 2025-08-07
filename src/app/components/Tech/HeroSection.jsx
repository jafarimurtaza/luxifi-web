"use client";

import SectionTitle from "../Layout/Titles/SectionTitle";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";
import LinearLeft from "../Layout/Images/LinearLeft";
import Description from "../Layout/Descriptions/Description";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center md:min-h-screen md:justify-center">
      <SectionTitle title="next level wifi" subTitle="tailored for you" />
      <ul className="flex flex-col items-center justify-center gap-4 w-full text-left text-2xl font-bold list-disc">
        <li>Engineered to Perform.</li>
        <li>Installed to Disappear.</li>
        <li>Loved for the Experience.</li>
      </ul>
      <Description description="Every product and service we offer is designed to give you one thing: effortless connection — everywhere in your home." />

      <RenderBigIntroImage src="/images/tech/office-graphic.jpg" />
      <LinearLeft />
    </section>
  );
}
