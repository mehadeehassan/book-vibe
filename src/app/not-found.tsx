import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-white px-4">
      <div className="w-full max-w-2xl text-center">
        {/* 404 */}
        <div className="relative">
          <h1 className="text-[120px] font-black leading-none tracking-tight text-emerald-100 sm:text-[180px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-2xl bg-white px-5 py-2 text-xl font-bold text-emerald-600 shadow-lg sm:text-2xl">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Icon */}
        <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-4xl">
          📚
        </div>

        {/* Message */}
        <h2 className="mt-6 text-2xl font-bold text-gray-800 sm:text-3xl">
          Oops! This page is missing.
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          The page you are looking for might have been removed,
          renamed, or the URL may be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg"
          >
            🏠 Back to Home
          </Link>

          <Link
            href="/books"
            className="rounded-xl border border-emerald-600 px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50"
          >
            📖 Explore Books
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;