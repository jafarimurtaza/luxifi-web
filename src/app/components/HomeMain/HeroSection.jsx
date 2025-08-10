import Image from "next/image";
import { WifiDevice } from "./WifiDevice";

export function HeroSection() {
  return (
    <div className=" py-2 flex flex-col bg-black items-center justify-center  w-full overflow-hidden ">
      <div className="flex items-center justify-center mt-20 relative w-full h-full">
        <Image
          src="/images/home/line.png"
          alt="Abstract blue lines background"
          fill
          quality={100}
          className="absolute inset-0 z-0 object-cover opacity-70 "
          priority
        />

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-4 py-8 md:py-16">
          <WifiDevice />
        </div>
      </div>
    </div>
  );
}
