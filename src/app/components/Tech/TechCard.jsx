'use client';

import { motion } from 'framer-motion';
import CardLayout from '@/app/components/Layout/Cards/CardLayout';
import TechCardTabs from './TechCardTabs';

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function TechCard({ card }) {
  return (
    <CardLayout
      key={card.id}
      variants={itemVariants}
      isLeft={card.isLeft}
      image={card.image}
      imageAlt={card.title}
      className="transition-all duration-300"
    >
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg">
            <card.icon className="text-2xl sm:text-3xl md:text-4xl text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-primary">
            {card.title}
          </h2>
        </div>
        <TechCardTabs
          description={card.description}
          features={card.features}
          dimensions={card.dimensions}
        />
      </div>
    </CardLayout>
  );
}
