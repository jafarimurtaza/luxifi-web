'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function FAQComponent({ 
  title = "FAQ", 
  faqs = [], 
  className = "",
  titleClassName = "",
  itemClassName = ""
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`bg-base-100 text-base-content py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide mb-6 sm:mb-8 md:mb-10 text-left ${titleClassName}`}
      >
        {title}
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-2 sm:space-y-3 md:space-y-4"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`border-b border-base-content/50 pb-3 sm:pb-4 transition-all duration-300 ${itemClassName}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-start w-full text-left group py-2 sm:py-3"
            >
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-base-content group-hover:text-primary transition-colors max-w-[85%] sm:max-w-[90%] leading-relaxed">
                {faq.question}
              </span>
              <motion.span 
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-primary text-xl sm:text-2xl md:text-3xl flex-shrink-0 ml-3 sm:ml-4 cursor-pointer"
              >
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </motion.span>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-base-content/80 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 