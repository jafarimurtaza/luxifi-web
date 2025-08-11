"use client";

import Description from "../Layout/Descriptions/Description";
import LinearRight from "../Layout/Images/LinearRight";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";
import SectionTitle from "../Layout/Titles/SectionTitle";
import RenderSectionVideo from "../Layout/Video/RenderSectionVideo";

export default function HeroSection() {
  return (
    <section className="relative px-4 flex flex-col items-center justify-center md:min-h-screen">
      {/* Section Title */}
      <SectionTitle title="Effortless Performance," subTitle="Always On" />

      {/* Description Paragraphs */}
      <Description description="We maintain it, so you never have to think about it." />
      <Description
        description={`A truly luxury experience means never worrying about your WiFi again. That’s why Luxifi offers tailored care plans designed to keep your network fast, secure, and silently optimized — all in the background.
Whether you're streaming, working, or simply living, your system stays protected, updated, and performing at its peak — without a single tech headache.`}
      />
      <Description description="Because real luxury isn’t just about speed — it’s about never having to ask." />

      {/* Responsive video, background removed */}
      <div
        className="
          static-video
          mt-8
          w-full
          max-w-7xl
          mx-auto
          rounded-lg
          overflow-hidden
          aspect-video
          [&>div]:relative
          [&>div]:w-full
          [&>div]:h-full
          [&>div]:inset-auto
          [&>div>div]:hidden
        "
      >
        <RenderSectionVideo videoPath="/videos/U6+.mp4" />
      </div>

      <LinearRight />
    </section>
  );
}
