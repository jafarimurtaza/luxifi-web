"use client";


import Description from "../Layout/Descriptions/Description";
import LinearLeft from "../Layout/Images/LinearLeft";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";
import SectionTitle from "../Layout/Titles/SectionTitle";

export default function HeroSection() {
  return (
    <section className="relative px-4 flex flex-col items-center justify-center md:min-h-screen">
      {/* Section Title */}
      <SectionTitle  title="How We Set the Bar"/>

      {/* Description Paragraphs */}
      <Description description="Luxury-Grade Connectivity, Delivered with Heart." />
      <Description  description={`At Luxifi, our difference isn’t just in what we install — it’s in how we show up. We combine expert engineering with human-centered care, ensuring every client feels heard, supported, and delighted from the first call to the final test.
`}
      />
      <Description description="Our promise is simple: We make your WiFi invisible — because when it works flawlessly, you shouldn’t have to think about it." />
      <RenderBigIntroImage src={"/images/approach/bar-1.jpg"} />
      <LinearLeft />
    </section>
  );
}
