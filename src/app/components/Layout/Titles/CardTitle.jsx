import React from "react";

export default function CardTitle({ title }) {
  return (
    <h3 className="text-2xl md:text-3xl capitalize font-bold px-1 md:px-3 py-4 text-white">
      {title}
    </h3>
  );
}
