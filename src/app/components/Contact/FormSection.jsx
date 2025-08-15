import { motion } from "framer-motion"
import { FormField } from "./FormField"

import { Calendar, Headphones } from "lucide-react"
export function FormSection({ formData, isSubmitting, onSubmit, onChange }) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="card bg-base-200/80 backdrop-blur-sm border border-base-300/50 shadow-xl"
    >
      <div className="card-body">
        <form onSubmit={onSubmit} className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <FormField
              id="firstName"
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={onChange}
              placeholder="……………"
              required
            />
            <FormField
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={onChange}
              placeholder="……………"
              required
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FormField
              id="email"
              name="email"
              type="email"
              label="Email"
              value={formData.email}
              onChange={onChange}
              placeholder="………….………"
              required
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FormField
              id="serviceAddress"
              name="serviceAddress"
              label="Service Address"
              value={formData.serviceAddress}
              onChange={onChange}
              placeholder="……………"
              required
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="form-control"
          >
            <label className="label" htmlFor="comment">
              <span className="label-text text-sm font-medium">Comment</span>
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={onChange}
              className="textarea textarea-bordered bg-base-100/50 focus:textarea-warning transition-all duration-200 min-h-[120px] resize-none"
              placeholder="…………………………………"
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            type="submit"
            disabled={isSubmitting}
            className="btn bg-base-content w-full font-medium text-primary"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-4 border-t border-base-300/50"
          >
            <p className="text-sm text-base-content/70 mb-4 text-center">
              Need additional support? Pick an option below
            </p>
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="btn btn-outline"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Consult
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="btn btn-outline "
              >
                <Headphones className="w-4 h-4 mr-2" />
                Request Support
              </motion.button>
            </div>
          </motion.div>
        </form>
      </div>
    </motion.div>
  )
}
