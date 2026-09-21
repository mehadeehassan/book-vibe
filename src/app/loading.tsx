const Loading = () => {
  return (
    <main className="min-h-[70vh] bg-white px-4 py-10">
      <div className="mx-auto max-w-7xl animate-pulse">
        {/* Heading Skeleton */}
        <div className="mx-auto mb-10 h-10 w-56 rounded-lg bg-gray-200" />

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="h-64 rounded-xl bg-gray-200" />

              <div className="mt-4 h-5 w-3/4 rounded bg-gray-200" />

              <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />

              <div className="mt-4 flex gap-2">
                <div className="h-6 w-16 rounded-full bg-gray-200" />
                <div className="h-6 w-16 rounded-full bg-gray-200" />
              </div>

              <div className="mt-4 h-4 w-full rounded bg-gray-200" />
              <div className="mt-2 h-4 w-4/5 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;