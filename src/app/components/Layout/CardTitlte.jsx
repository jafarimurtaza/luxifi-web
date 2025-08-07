import React from "react";

export default function CardTitlte({ title }) {
  return (
    <h3 className="text-2xl md:text-3xl uppercase font-bold p-4 text-white">
      {title}
    </h3>
  );
}
