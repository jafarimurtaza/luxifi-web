import ContactSection from "../components/Contact/ContactSection";
import { pageMetadata } from "../lib/seo/pageMetadata";

export const metadata = pageMetadata.contact;

export default function Contact() {
  return (
    <div className="min-h-screen max-w-full md:max-w-[2400px] mx-auto">
      <ContactSection />
    </div>
  );
}
