'use client';

import FAQComponent from '@/app/components/Tech/FAQ/FAQComponent';
import { faqCategories } from '@/app/lib/data/faqData';

export default function FAQSection() {
  return (
    <FAQComponent
      title={faqCategories.maintenance.title}
      categories={faqCategories.maintenance.categories}
    />
  );
}
