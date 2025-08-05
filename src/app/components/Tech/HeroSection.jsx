'use client';

import SectionTitle from '../Layout/Titles/SectionTitle';
import RenderBigIntroImage from '../Layout/Images/RenderBigIntroImage';
import LinearLeft from '../Layout/Images/LinearLeft';
import Description from '../Layout/Descriptions/Description';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center md:min-h-screen md:justify-center">
      <SectionTitle title="next level wifi" subTitle="tailored for you" />
      <Description 
        subtitle="Engineered to Perform. Installed to Disappear. Loved for the Experience."
        description="Every product and service we offer is designed to give you one thing: effortless connection — everywhere in your home."
      />
      <RenderBigIntroImage src="/images/tech/office-graphic.jpg" />
      <LinearLeft />
    </section>
  );
} 