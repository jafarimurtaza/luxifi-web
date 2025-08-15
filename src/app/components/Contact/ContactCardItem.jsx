import { motion } from "framer-motion"

export function ContactCardItem({ card, index }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="card bg-base-200 border border-base-300 hover:border-warning/50 transition-all duration-300 group hover:shadow-lg hover:shadow-warning/10"
    >
      <div className="card-body text-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-warning/20 transition-colors"
        >
          <card.icon className="w-6 h-6 text-warning" />
        </motion.div>
        <h3 className="card-title font-semibold font-[family-name:var(--font-heading)] text-lg mb-2 justify-center">
          {card.title}
        </h3>
        <p className="text-warning text-sm mb-3">{card.subtitle}</p>
        <p className="text-base-content/70 text-sm mb-4 whitespace-pre-line">{card.details}</p>
        <motion.button
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="text-warning hover:text-warning/80 text-sm font-medium transition-colors"
        >
          {card.action} →
        </motion.button>
      </div>
    </motion.div>
  )
}
