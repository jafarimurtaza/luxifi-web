export default function BlogDetailsSkeleton() {
  return (
    <section className="max-w-6xl mx-auto !my-20 px-6">
      {/* Skeleton for Hero Image */}
      <div className="skeleton h-[600px] w-full rounded-2xl mb-10"></div>

      {/* Skeleton for Title */}
      <div className="skeleton h-10 w-3/4 mb-4 rounded"></div>

      {/* Skeleton for Meta */}
      <div className="flex items-center gap-4 mb-8">
        <div className="skeleton h-4 w-32 rounded"></div>
        <div className="skeleton h-4 w-24 rounded"></div>
      </div>

      {/* Skeleton for Content */}
      <div className="mt-10 space-y-4">
        <div className="skeleton h-6 w-full rounded"></div>
        <div className="skeleton h-6 w-full rounded"></div>
        <div className="skeleton h-6 w-3/4 rounded"></div>
        <div className="skeleton h-6 w-full rounded"></div>
        <div className="skeleton h-6 w-5/6 rounded"></div>
        <div className="skeleton h-6 w-full rounded"></div>
        <div className="skeleton h-6 w-2/3 rounded"></div>

        {/* Additional content skeleton */}
        <div className="skeleton h-6 w-full rounded mt-8"></div>
        <div className="skeleton h-6 w-4/5 rounded"></div>
        <div className="skeleton h-6 w-full rounded"></div>
        <div className="skeleton h-6 w-3/5 rounded"></div>
      </div>
    </section>
  );
}
