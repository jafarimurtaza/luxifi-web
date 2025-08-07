"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Description from "../../Layout/Descriptions/Description";

function FAQItem({ isOpen, onToggle, question, answer, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="border-b border-base-content/40 pb-3"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex justify-between items-start w-full text-left py-2 cursor-pointer group"
      >
        <h4
          className="max-w-[85%] leading-snug text-primary font-semibold text-base sm:text-lg md:text-xl lg:text-2xl
          group-hover:text-primary transition-colors"
        >
          {question}
        </h4>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-3 text-primary text-lg sm:text-xl flex-shrink-0"
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <Description
              description={answer}
              className="!text-left !px-1 !my-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQComponent({ title = "FAQ", faqs = [], categories = [] }) {
  // Store open FAQ index per category key or 'default' for ungrouped FAQs
  const [openIndex, setOpenIndex] = useState({});

  const toggleFAQ = (catKey, faqIndex) => {
    setOpenIndex((prev) => ({
      ...prev,
      [catKey]: prev[catKey] === faqIndex ? null : faqIndex,
    }));
  };

  const renderFAQs = (items, catKey = "default") =>
    items.map((faq, idx) => (
      <FAQItem
        key={`${catKey}-${idx}`}
        isOpen={openIndex[catKey] === idx}
        onToggle={() => toggleFAQ(catKey, idx)}
        question={faq.question}
        answer={faq.answer}
        delay={idx * 0.1}
      />
    ));

  return (
    <section className="bg-base-100 text-base-content py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide mb-10 text-left"
      >
        {title}
      </motion.h2>

      {categories.length > 0 ? (
        categories.map((category, idx) => (
          <div key={`category-${idx}`} className="mb-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4"
            >
              {category.title}
            </motion.h3>

            <div className="space-y-3 sm:space-y-4">
              {renderFAQs(category.items, idx)}
            </div>
          </div>
        ))
      ) : (
        <div className="space-y-3 sm:space-y-4">{renderFAQs(faqs)}</div>
      )}
    </section>
  );
}
