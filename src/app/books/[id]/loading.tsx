const Loading = () => {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="grid grid-cols-1 gap-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          {/* Book Image */}
          <div className="flex items-center justify-center">
            <div className="h-112.5 w-full max-w-[320px] rounded-2xl bg-gray-200" />
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <div className="h-7 w-24 rounded-full bg-gray-200" />

            {/* Title */}
            <div className="mt-5 h-10 w-4/5 rounded-lg bg-gray-200" />

            {/* Author */}
            <div className="mt-4 h-5 w-1/2 rounded bg-gray-200" />

            {/* Rating */}
            <div className="mt-6 h-6 w-32 rounded bg-gray-200" />

            {/* Review */}
            <div className="mt-6 space-y-3">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-4/5 rounded bg-gray-200" />
            </div>

            {/* Tags */}
            <div className="mt-6 flex gap-3">
              <div className="h-7 w-20 rounded-full bg-gray-200" />
              <div className="h-7 w-24 rounded-full bg-gray-200" />
              <div className="h-7 w-20 rounded-full bg-gray-200" />
            </div>

            {/* Book Information */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="h-16 rounded-xl bg-gray-200" />
              <div className="h-16 rounded-xl bg-gray-200" />
              <div className="h-16 rounded-xl bg-gray-200" />
              <div className="h-16 rounded-xl bg-gray-200" />
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <div className="h-12 w-32 rounded-xl bg-gray-200" />
              <div className="h-12 w-32 rounded-xl bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;