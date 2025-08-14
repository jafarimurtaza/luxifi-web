import Image from "next/image";
import React from "react";

export default function IntroImage({ src, alt, className }) {
  return (
    <div className={`w-full h-auto absolute inset-0 top-20 z-[0] ${className}`}>
      <div className="w-full h-full bg-black/50 absolute inset-0 z-[1]"></div>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
