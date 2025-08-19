export default function BlogLoadingStates({
  isFetchingNextPage,
  hasNextPage,
  allPostsLength,
}) {
  return (
    <>
      {/* Loading indicator for infinite scroll */}
      {isFetchingNextPage && (
        <div className="text-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-sm text-base-content/60">
            Loading more posts...
          </p>
        </div>
      )}

      {/* End of results indicator */}
      {!hasNextPage && allPostsLength > 0 && (
        <div className="text-center mt-8">
          <p className="text-sm text-base-content/60">
            You've reached the end of our blog posts!
          </p>
        </div>
      )}
    </>
  );
}
