"use client";
import SectionTitle from "../Layout/Titles/SectionTitle";
import RenderBigIntroImage from "../Layout/Images/RenderBigIntroImage";
import LinearLeft from "../Layout/Images/LinearLeft";


export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center md:min-h-screen md:justify-center px-4">
      <SectionTitle title="Keep your network" subTitle="running at its best." />
      <RenderBigIntroImage src="/images/maintenance/maintenace-hero-image.webp" />
      <LinearLeft />
    </section>
  );
}
