const Loading = () => {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="mx-auto max-w-7xl animate-pulse">
        {/* Page Title */}
        <div className="mx-auto mb-10 h-10 w-56 rounded-lg bg-gray-200" />

        {/* Reading Summary */}
        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-28 rounded-2xl bg-gray-200" />
          <div className="h-28 rounded-2xl bg-gray-200" />
          <div className="h-28 rounded-2xl bg-gray-200" />
        </div>

        {/* Progress Section */}
        <div className="mb-10 rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="h-6 w-48 rounded bg-gray-200" />

          <div className="mt-5 h-4 w-full rounded-full bg-gray-200" />

          <div className="mt-4 flex justify-between">
            <div className="h-4 w-20 rounded bg-gray-200" />
            <div className="h-4 w-20 rounded bg-gray-200" />
          </div>
        </div>

        {/* Books Section Title */}
        <div className="mb-6 h-7 w-40 rounded bg-gray-200" />

        {/* Books */}
        <div className="space-y-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row"
            >
              {/* Image */}
              <div className="h-48 w-full shrink-0 rounded-xl bg-gray-200 sm:h-48 sm:w-32" />

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center">
                <div className="h-6 w-3/4 rounded bg-gray-200" />

                <div className="mt-3 h-4 w-40 rounded bg-gray-200" />

                <div className="mt-5 h-4 w-full rounded bg-gray-200" />

                <div className="mt-2 h-4 w-4/5 rounded bg-gray-200" />

                {/* Progress */}
                <div className="mt-5 h-3 w-full rounded-full bg-gray-200" />

                <div className="mt-3 flex justify-between">
                  <div className="h-4 w-20 rounded bg-gray-200" />
                  <div className="h-4 w-20 rounded bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;