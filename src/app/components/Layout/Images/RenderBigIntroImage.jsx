import Image from "next/image";
import React from "react";

export default function RenderBigIntroImage({ src }) {
  return (
    <div className="relative w-full mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-[1400px] md:max-w-[1920px] h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1140px]">
      <Image
        src={src}
        alt="Wifi Hero"
        fill
        className="object-contain"
        priority
        style={{ filter: "hue-rotate(45deg)" }}
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1800px"
      />
    </div>
  );
}
