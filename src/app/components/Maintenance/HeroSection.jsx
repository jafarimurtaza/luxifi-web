"use client";

import Description from "../Layout/Descriptions/Description";
import LinearRight from "../Layout/Images/LinearRight";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";
import SectionTitle from "../Layout/Titles/SectionTitle";

export default function HeroSection() {
  return (
    <section className="relative px-4 flex flex-col items-center justify-center md:min-h-screen">
      {/* Section Title */}
      <SectionTitle title="Effortless Performance," subTitle="Always On" />
      {/* Description Paragraph */}
      <Description description="We maintain it, so you never have to think about it." />
      <Description
        description={`A truly luxury experience means never worrying about your WiFi again. That’s why Luxifi offers tailored care plans designed to keep your network fast, secure, and silently optimized — all in the background.
Whether you're streaming, working, or simply living, your system stays protected, updated, and performing at its peak — without a single tech headache.`}
      />
      <Description description="Because real luxury isn’t just about speed — it’s about never having to ask." />
      {/* Feature Cards */}
      {/* Hero Image */}
      <RenderBigIntroImage src="/images/maintenance/maintenace-hero-image.webp" />
      {/* Decorative Layer */}
      <LinearRight />
    </section>
  );
}
