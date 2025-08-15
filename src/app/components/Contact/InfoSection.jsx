
import { motion } from "framer-motion"
import { ContactInfoItem } from "./ContactInfoItem"

import { Mail, Phone} from "lucide-react"
export function InfoSection({ title, description, contactInfo }) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
     
        <h2 className="text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">{title}</h2>
        <p className="text-base-content/70 leading-relaxed">{description}</p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-4"
      >
        <ContactInfoItem icon={Mail} label="Email" value={contactInfo.email} />
        <ContactInfoItem icon={Phone} label="Phone" value={contactInfo.phone} />
      </motion.div>
    </motion.div>
  )
}
