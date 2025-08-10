"use client";

export function SectionLayout({
  children,
  backgroundColor = "#000",
  className = "",
  reverse = false,
}) {
  return (
    <section
      className={`min-h-screen flex items-center py-16 px-4 md:px-8 ${className}`}
      style={{ backgroundColor }}
    >
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full ${
          reverse ? "md:grid-flow-col-dense" : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
}
