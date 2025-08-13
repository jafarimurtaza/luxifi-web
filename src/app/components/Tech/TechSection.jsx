"use client";

import { techCards } from "../../lib/data/techCards";
import Container from "../Layout/Container";
import LinearLeft from "../Layout/Images/LinearLeft";
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
      <section
        id="network"
        className="relative py-6 sm:py-10 md:py-16 lg:py-20 xl:py-24"
      >
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
      <section
        id="premium"
        className="relative py-6 sm:py-10 md:py-16 lg:py-20 xl:py-24"
      >
        <div className="relative z-10">
          <SectionTitle title="⚙️ PREMIUM CABLING" subTitle="& HARDWARE" />
          <Container>
            {premiumCabling?.map((card) => (
              <TechCard key={card.id} card={card} />
            ))}
          </Container>
        </div>
      </section>

      {/* INTEGRATED SECURITY & VIDEO */}
      <section
        id="security"
        className="relative py-6 sm:py-10 md:py-16 lg:py-20 xl:py-24"
      >
        <div className="relative z-10">
          <SectionTitle title="🔐 INTEGRATED SECURITY" subTitle="& VIDEO" />
          <Container>
            {integratedSecurity?.map((card) => (
              <TechCard key={card.id} card={card} />
            ))}
          </Container>
        </div>
      </section>
      <LinearLeft />
    </>
  );
}
