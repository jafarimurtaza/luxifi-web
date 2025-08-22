import { HeroSection } from "./HeroSection";
import HowWeWork from "./HowWeDo/HowWeWork";
import SolutionSection from "./Luxifi/SolutionSection";
import WifiShowcase from "./Luxifi/wifishowcase";
import { LuxifiPartners } from "./LuxifiPartners/LuxifiPartners";
import LuxifiPromiseSection from "./Promise/LuxifiPromiseSection";
import CoreServicesSection from "./Services/CoreServicesSection";

import Testimonials from "./Testimonial/Testimonials";
import { TestimonialsSlider } from "./Testimonial/TestimonialsSlider";

export default function HomeMain() {
  return (
    <main>
      <HeroSection />
      <WifiShowcase />
      <SolutionSection />
      <CoreServicesSection />
      <LuxifiPromiseSection />
      <HowWeWork />
      <TestimonialsSlider />
      <Testimonials/>
      <LuxifiPartners/>
      
    </main>
  );
}
