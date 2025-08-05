"use client";

import { techCards } from "@/app/lib/data/techCards";
import Container from "../Layout/Container";
import LinearRight from "../Layout/Images/LinearRight";
import SectionTitle from "../Layout/Titles/SectionTitle";
import TechCard from "./TechCard";

export default function TechSection() {
  const networkTechnology = techCards?.slice(0, 4);
  const premiumCabling = techCards?.slice(4, 5);
  const integratedSecurity = techCards?.slice(5);

  return (
    <>
      {/* NETWORK TECHNOLOGY */}
      <section className="relative py-6 sm:py-10 md:py-16 lg:py-20 xl:py-24">
        <div className="relative z-10">
          <SectionTitle title="🔌 NETWORK" subTitle="TECHNOLOGY" />
          <Container>
            {networkTechnology?.map((card) => (
              <TechCard key={card.id} card={card} />
            ))}
          </Container>
        </div>
      </section>

      <LinearRight />

      {/* PREMIUM CABLING & HARDWARE */}
      <section className="relative py-6 sm:py-10 md:py-16 lg:py-20 xl:py-24">
        <div className="relative z-10">
          <SectionTitle title="⚙️ PREMIUM CABLING" subTitle="& HARDWARE" />
          <Container>
            {premiumCabling?.map((card) => (
              <TechCard key={card.id} card={card} />
            ))}
          </Container>
        </div>
      </section>

      <LinearRight />

      {/* INTEGRATED SECURITY & VIDEO */}
      <section className="relative py-6 sm:py-10 md:py-16 lg:py-20 xl:py-24">
        <div className="relative z-10">
          <SectionTitle title="🔐 INTEGRATED SECURITY" subTitle="& VIDEO" />
          <Container>
            {integratedSecurity?.map((card) => (
              <TechCard key={card.id} card={card} />
            ))}
          </Container>
        </div>
      </section>
    </>
  );
}
