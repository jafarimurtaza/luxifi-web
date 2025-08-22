import { HeroSection } from "./HeroSection";
import HowWeWork from "./HowWeDo/HowWeWork";
import SolutionSection from "./Luxifi/SolutionSection";
import WifiShowcase from "./Luxifi/wifishowcase";
import { LuxifiPartners } from "./LuxifiPartners/LuxifiPartners";
import LuxifiPromiseSection from "./Promise/LuxifiPromiseSection";
import CoreServicesSection from "./Services/CoreServicesSection";
import TestimonialsSection from "./Testimonial/TestimonialsSection";

export default function HomeMain() {
  return (
    <main>
      <HeroSection />
      <WifiShowcase />
      <SolutionSection />
      <CoreServicesSection />
      <LuxifiPromiseSection />
      <HowWeWork />
      <TestimonialsSection />
    </main>
  );
}
