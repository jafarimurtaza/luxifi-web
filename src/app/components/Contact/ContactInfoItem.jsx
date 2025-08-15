
import { motion } from "framer-motion"
export function ContactInfoItem({ icon: Icon, label, value }) {
  return (
    <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center"
      >
        <Icon className="w-5 h-5 text-warning" />
      </motion.div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-base-content/70 text-sm">{value}</p>
      </div>
    </motion.div>
  )
}
