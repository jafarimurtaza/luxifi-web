'use client';

import FAQComponent from './FAQComponent';
import { faqCategories } from '@/app/lib/data/faqData';

export default function FAQSection() {
  return (
    <FAQComponent 
      title={faqCategories.tech.title}
      faqs={faqCategories.tech.faqs}
    />
  );
}
