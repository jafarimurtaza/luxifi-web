"use client";

import FAQComponent from "../../Tech/FAQ/FAQComponent";
import { faqCategories } from "../../../lib/data/faqData";

export default function FAQSection() {
  return (
    <FAQComponent
      title={faqCategories.maintenance.title}
      categories={faqCategories.maintenance.categories}
    />
  );
}
