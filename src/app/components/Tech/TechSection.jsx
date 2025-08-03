'use client';

import { motion } from 'framer-motion';
import CardLayout from '@/app/components/Shared/CardLayout';

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

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const techCards = [
  {
    id: 1,
    title: 'In-Wall WiFi Access Points',
    image: '/images/tech/in-wall-wifi-access-points.webp',
    description: `Protruding less than 1\" from the wall, our WiFi 6 in-wall access points are as powerful as they are unobtrusive. Additionally, 4 built-in gigabit ethernet ports enable hardwired connections.`,
    isLeft: true,
  },
  {
    id: 2,
    title: 'Ceiling-Mount Access Points',
    image: '/images/tech/ceiling-mount.webp',
    description: `Optimal in open spaces or in situations where wall-mounts are not viable, ceiling mount access points cast a broad pattern with a discrete aesthetic.`,
    isLeft: false,
  },
  {
    id: 3,
    title: 'Cloud Control Systems',
    image: '/images/tech/cloud-control-systems.webp',
    description: `An all-in-one dynamo that sits at the heart of every network we implement, the Dream Machine Pro excels as a security gateway, router, managed switch, and cloud network controller. Install a 3.5\" HDD in the drive bay to add NVR capability through UniFi Protect for smaller camera setups.`,
    isLeft: true,
  },
  {
    id: 4,
    title: 'Outdoor Access Points',
    image: '/images/tech/outdoor-access-points.webp',
    description: `Optimized for both indoor and outdoor usage, the Access Point U6 Mesh is highly versatile and effective. IPX-5 waterproof casing and all-directional signal casting generates smooth coverage for large outdoor areas such as yards, patios, and pools.`,
    isLeft: false,
  },
  {
    id: 5,
    title: 'Premium Data Cabling',
    image: '/images/tech/premium-data-cabling.webp',
    description: `Underpinning every network we install, our premium Cat6a wire is the highest-quality data cabling available. Our wiring experts are trained to run the lines cleanly, leaving no visible trace of the work in the living areas of the home.`,
    isLeft: true,
  }
];

const SectionTitle = () => (
  <motion.div
    variants={titleVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight bg-white bg-clip-text text-transparent">
      Network<br />Technology
    </h1>
  </motion.div>
);

const TechCard = ({ card }) => (
  <CardLayout
    key={card.id}
    variants={itemVariants}
    isLeft={card.isLeft}
    image={card.image}
    imageAlt={card.title}
    className="bg-black transition-all duration-300"
  >
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-white bg-clip-text text-transparent">
        {card.title}
      </h2>
      <p className="text-base sm:text-xl  md:text-2xl leading-relaxed text-white font-light">
        {card.description}
      </p>
    </div>
  </CardLayout>
);

export default function TechSection() {
  return (
    <section className="relative bg-black text-white py-20 sm:py-24 md:py-32 overflow-hidden">
      <div className="relative z-10">
        <SectionTitle />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16"
        >
          {techCards.map((card) => (
            <TechCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>

      {/* Bottom linear2 image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-screen mt-12"
        style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }} // to break out of centered max width
      >
        <img
          src="/images/tech/linear2.svg"
          alt="image"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
