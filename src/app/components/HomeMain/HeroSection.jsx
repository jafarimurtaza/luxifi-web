import Image from "next/image";
import { WifiDevice } from "./WifiDevice";

export function HeroSection() {
  return (
    <div className="relative py-2 flex flex-col bg-black items-center justify-center min-h-[30vh] w-full overflow-hidden ">
      <h1 className=" text-primary max-w-2xl text-center text-3xl font-bold md:text-3xl lg:text-4xl ">
      SEAMLESS WIFI
      </h1>
      <p className="text-white/70 max-w-2xl text-center text-lg mt-4">
        Because today’s homes demand more.
      </p>

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
