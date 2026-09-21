import banner from '@/assets/pngwing.png';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-6 md:py-10">
      <div className="relative isolate overflow-hidden rounded-4xl bg-linear-to-br from-emerald-50 via-white to-teal-50 px-6 py-12 shadow-sm ring-1 ring-black/5 sm:px-10 md:px-16 md:py-20 lg:px-20">
        {/* Decorative Background */}
        <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Content */}
          <div className="text-center md:text-left">
            <span className="mb-5 inline-flex items-center rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
              📚 Discover your next favorite book
            </span>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Books to
              <span className="block text-emerald-600">freshen up</span>
              your bookshelf.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg md:mx-0">
              Explore inspiring stories, timeless classics, and exciting new reads — all waiting to
              find a place on your bookshelf.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <Link
                href="/listed-books"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30"
              >
                View The List
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <span className="text-sm font-medium text-gray-500">Find your next read</span>
            </div>
          </div>
          {/* Banner Image */}
          <div className="relative flex justify-center md:justify-end">
            {/* Glow */}
            <div className="absolute inset-0 mx-auto h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl md:h-80 md:w-80" />

            {/* Image Card */}
            <div className="relative rounded-4xl bg-white/60 p-5 shadow-2xl shadow-emerald-900/10 ring-1 ring-white/80 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2">
              <Image
                src={banner}
                alt="A stack of books"
                priority
                className="relative h-auto w-64 sm:w-72 md:w-80 lg:w-88"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-gray-100 sm:-left-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg">
                    📖
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Happy Reading</p>
                    <p className="text-xs text-gray-500">One page at a time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
