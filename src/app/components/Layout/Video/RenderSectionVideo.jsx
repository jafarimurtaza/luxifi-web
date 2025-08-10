import React from "react";

export default function RenderSectionVideo({ videoPath }) {
  return (
    <div className="absolute w-full h-full inset-0 ">
      <div className="absolute w-full h-full inset-0 bg-black/60"></div>
      <video
        src={videoPath}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
}
