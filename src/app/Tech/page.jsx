import TechSection from "../components/Tech/TechSection";
import FAQSection from "../components/Tech/FAQ/FAQSection";
import HeroSection from "../components/Tech/HeroSection";
import IntroImage from "../components/Layout/Images/IntroImage";
export default function Tech() {
  return (
    <div>
      <IntroImage src={"/images/tech/intro-house-image.jpg"} alt="Hero Image" />

      <HeroSection />
      <TechSection />
      <FAQSection />
    </div>
  );
}
