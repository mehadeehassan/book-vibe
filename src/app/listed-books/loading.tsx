const Loading = () => {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="mx-auto max-w-7xl animate-pulse">
        {/* Page Title */}
        <div className="mx-auto mb-8 h-10 w-48 rounded-lg bg-gray-200" />

        {/* Tabs + Sort */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex gap-3">
            <div className="h-11 w-36 rounded-xl bg-gray-200" />
            <div className="h-11 w-36 rounded-xl bg-gray-200" />
          </div>

          {/* Sort Dropdown */}
          <div className="h-11 w-40 rounded-xl bg-gray-200" />
        </div>

        {/* Book List */}
        <div className="space-y-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row"
            >
              {/* Book Image */}
              <div className="h-52 w-full shrink-0 rounded-xl bg-gray-200 sm:h-52 sm:w-36" />

              {/* Book Information */}
              <div className="flex flex-1 flex-col justify-center">
                {/* Status */}
                <div className="h-7 w-24 rounded-full bg-gray-200" />

                {/* Category */}
                <div className="mt-3 h-4 w-20 rounded bg-gray-200" />

                {/* Book Name */}
                <div className="mt-3 h-7 w-3/4 rounded bg-gray-200" />

                {/* Author */}
                <div className="mt-3 h-4 w-40 rounded bg-gray-200" />

                {/* Review */}
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full rounded bg-gray-200" />
                  <div className="h-3 w-4/5 rounded bg-gray-200" />
                </div>

                {/* Book Details */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="h-7 w-24 rounded-full bg-gray-200" />
                  <div className="h-7 w-28 rounded-full bg-gray-200" />
                  <div className="h-7 w-24 rounded-full bg-gray-200" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center sm:w-24">
                <div className="h-8 w-16 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;