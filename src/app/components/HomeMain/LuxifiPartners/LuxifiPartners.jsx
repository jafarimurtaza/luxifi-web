import Description from "../../Layout/Descriptions/Description";
import SectionTitle from "../../Layout/Titles/SectionTitle";
import { LogoRail } from "./LogoRail";

export function LuxifiPartners() {
  const brands = [
    { name: "Ubiquiti", image: "/images/home/partners/Ubiquiti-Logo-2.png" },
    { name: "Cable Matters", image: "/images/home/partners/41TKdzJXm9L.png" },
    { name: "WattBox", image: "/images/home/partners/wattbox-logo.png" },
    { name: "OvrC", image: "/images/home/partners/mc.webp" },
    { name: "unifi", image: "/images/home/partners/unifi.svg" },
    { name: "Tripp Lite", image: "/images/home/partners/Tripp.png" },
    { name: "NetSpot", image: "/images/home/partners/NetSpot.png" },
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 via-transparent to-transparent opacity-30" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto mb-6">
        <SectionTitle
  title={
    <span className="
      text-4xl md:text-5xl 
      font-extrabold 
      leading-snug md:leading-tight 
      text-center
      bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500
      bg-clip-text text-transparent
      drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]
    ">
      Seamless Technology, <br className="hidden md:block" /> Luxurious Experience
    </span>
  }
  
/>
          <Description
            textClassName="text-base-content text-soft-shadow"
            description={`Luxifi integrates world-class, enterprise-grade solutions — engineered for unmatched speed, security, and
            stability. Every connection is crafted with precision and elegance.`}
          />

          <p className="text-sm md:text-base text-gray-400 mb-12">
            "Trusted by global innovators:"
          </p>
        </div>

        {/* Logo rails container */}
        <div className="w-full max-w-7xl mx-auto space-y-8">
          {/* Desktop: Two rails */}
          <div className="hidden md:block space-y-8">
            <LogoRail brands={brands} direction="left" />
            <LogoRail brands={brands} direction="right" />
          </div>

          {/* Mobile: Single rail */}
          <div className="md:hidden ">
            <LogoRail brands={brands} direction="left" />
          </div>
        </div>
      </div>
    </section>
  );
}
