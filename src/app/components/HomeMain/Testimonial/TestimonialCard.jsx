
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import Description from "../../Layout/Descriptions/Description"

export function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <div className="relative  bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 h-full border border-white/[0.12] transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-white/[0.12] group-hover:to-white/[0.04] group-hover:border-white/[0.2] group-hover:shadow-xl">
        <div className="mb-4 md:mb-5">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-400 border border-white/10">
            <Quote className="w-5 h-5 md:w-6 md:h-6 text-white/90" />
          </div>
        </div>

        <div className="mb-4 md:mb-6 flex-1">
          <div className=" text-sm md:text-md leading-relaxed font-light">
            <Description description={testimonial.text} />
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-4 md:pt-5">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-700/80 to-gray-900/80 rounded-lg md:rounded-xl flex items-center justify-center text-base md:text-lg font-bold text-white border border-white/10 backdrop-blur-sm flex-shrink-0">
              {testimonial.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-white text-sm md:text-base mb-1 tracking-wide truncate">
                {testimonial.name}
              </div>
              <div className="text-blue-400 text-xs md:text-sm font-semibold mb-0.5 truncate">{testimonial.title}</div>
              <div className="text-white/60 text-xs font-medium truncate">{testimonial.location}</div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
      </div>
    </motion.div>
  )
}
