const Loading = () => {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Page Title */}
        <div className="mx-auto mb-10 h-10 w-52 animate-pulse rounded-lg bg-gray-200" />

        {/* Book Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              {/* Book Image */}
              <div className="h-72 w-full animate-pulse rounded-xl bg-gray-200" />

              {/* Category */}
              <div className="mt-4 h-6 w-20 animate-pulse rounded-full bg-gray-200" />

              {/* Book Name */}
              <div className="mt-4 h-6 w-4/5 animate-pulse rounded bg-gray-200" />

              {/* Author */}
              <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-gray-200" />

              {/* Rating */}
              <div className="mt-4 h-5 w-24 animate-pulse rounded bg-gray-200" />

              {/* Button */}
              <div className="mt-5 h-10 w-full animate-pulse rounded-xl bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;