import Image from "next/image";
import React from "react";

function RenderImage({ src }) {
  return (
    <div className="p-4 bg-white h-full">
      <Image
        src={src}
        alt="image"
        width={500}
        height={500}
        className="aspect-video object-contain mx-auto"
      />
    </div>
  );
}

function RenderText({ children }) {
  return <div className="p-4 h-full">{children}</div>;
}

export default function CardLayout({ isLeft = false, image, children }) {
  return (
    <div className="w-full grid grid-cols-2">
      {isLeft ? (
        <>
          <RenderImage src={image} />
          <RenderText>{children}</RenderText>
        </>
      ) : (
        <>
          <RenderText>{children}</RenderText>
          <RenderImage src={image} />
        </>
      )}
    </div>
  );
}
