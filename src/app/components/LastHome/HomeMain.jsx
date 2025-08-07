import BackgroundPaths from "./background-paths";
import { FailedSolutions } from "./luxifi/failed-solutions";
import { LuxifiSolution } from "./luxifi/luxifi-solution";
import { SolidFoundationsSection } from "./luxifi/SolidFoundationsSection";
import { WifiNightmareSection } from "./luxifi/WifiNightmareSection";
import { CoreServicesSection } from "./services/core-services-section";
import { HowWeWorkSection } from "./HowWeDo/how-we-work-section";
import { LuxifiPromiseSection } from "./promise/luxifi-promise-section";
import { TestimonialsSection } from "./testimonials-section";
import { HeroSection } from "../HomeMain/HeroSection";

export default function HomeMain() {
  return (
    <main>
      <BackgroundPaths />
      <WifiNightmareSection />
      <FailedSolutions />
      <LuxifiSolution />
       <HeroSection />
      <SolidFoundationsSection />
     
      <LuxifiPromiseSection />
      
      <CoreServicesSection />
      <TestimonialsSection />
      <HowWeWorkSection />
    </main>
  );
}
