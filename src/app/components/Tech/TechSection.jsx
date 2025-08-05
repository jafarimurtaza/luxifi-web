'use client';

import { motion } from 'framer-motion';
import SectionTitle from '../Layout/Titles/SectionTitle';
import LinearRight from '../Layout/Images/LinearRight';
import TechCard from './TechCard';
import { techCards } from '@/app/lib/data/techCards';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export default function TechSection() {
  // Group cards by category
  const networkTechnology = techCards.slice(0, 4);
  const premiumCabling = techCards.slice(4, 5);
  const integratedSecurity = techCards.slice(5);

  return (
    <>
      {/* NETWORK TECHNOLOGY */}
      <section className="relative py-6 sm:py-10 md:py-16 lg:py-20 xl:py-24">
        <div className="relative z-10">
          <SectionTitle title="🔌 NETWORK" subTitle="TECHNOLOGY" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
          >
            {networkTechnology.map((card) => (
              <TechCard key={card.id} card={card} />
            ))}
          </motion.div>
        </div>
      </section>

      <LinearRight />

      {/* PREMIUM CABLING & HARDWARE */}
      <section className="relative py-6 sm:py-10 md:py-16 lg:py-20 xl:py-24">
        <div className="relative z-10">
          <SectionTitle title="⚙️ PREMIUM CABLING" subTitle="& HARDWARE" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
          >
            {premiumCabling.map((card) => (
              <TechCard key={card.id} card={card} />
            ))}
          </motion.div>
        </div>
      </section>

      <LinearRight />

      {/* INTEGRATED SECURITY & VIDEO */}
      <section className="relative py-6 sm:py-10 md:py-16 lg:py-20 xl:py-24">
        <div className="relative z-10">
          <SectionTitle title="🔐 INTEGRATED SECURITY" subTitle="& VIDEO" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
          >
            {integratedSecurity.map((card) => (
              <TechCard key={card.id} card={card} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
