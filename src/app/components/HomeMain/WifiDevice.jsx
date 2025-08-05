import Image from "next/image";

export function WifiDevice() {
  return (
    <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full bg-white shadow-lg md:h-[200px] md:w-[200px]">
  
      <div className="relative animate-lux-glow shadow-lg flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-primary bg-white z-10">
        <Image
          src="/images/home/on.webp"
          alt="Stylized Wi-Fi device"
          width={100}
          height={100}
          className="h-auto w-auto object-contain md:h-[90px] md:w-[90px]"
        />
      </div>
    </div>
  );
}
