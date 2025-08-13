import Image from "next/image";
import BackgroundPaths from "../LastHome/background-paths";

export function HeroSection() {
  return (
    <div className="flex flex-col bg-black items-center justify-center w-full overflow-hidden ">
      <BackgroundPaths />
      <div className="flex items-center justify-center relative w-full h-full">
        <Image
          src="/images/home/line.png"
          alt="Abstract blue lines background"
          fill
          quality={100}
          className="absolute inset-0 z-0 object-cover opacity-70"
          priority
        />
      </div>
    </div>
  );
}
