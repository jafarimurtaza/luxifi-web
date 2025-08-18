export default function BlogSkeleton({ count = 6 }) {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            color: "var(--tw-base-content)",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Latest Insights & Tips
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-base-content/80 to-base-content mx-auto rounded-full"></div>
        </div>

        {/* Skeleton Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(count)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-2xl border border-base-300/50 p-4"
            >
              <div className="skeleton h-48 w-full rounded-xl"></div>
              <div className="skeleton h-4 w-20 rounded"></div>
              <div className="skeleton h-6 w-full rounded"></div>
              <div className="skeleton h-4 w-full rounded"></div>
              <div className="skeleton h-4 w-3/4 rounded"></div>
              <div className="flex justify-between items-center mt-2">
                <div className="skeleton h-4 w-24 rounded"></div>
                <div className="skeleton h-8 w-8 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
