import logo from '@/assets/favicon.png';
import Image from 'next/image';
import Link from 'next/link';

const NavbarPage = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
            <Image
              src={logo}
              alt="Book Vibe logo"
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-contain"
            />
          </div>

          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Book<span className="text-emerald-600">Vibe</span>
          </span>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          <li>
            <Link
              href="/"
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/books"
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
            >
              Books
            </Link>
          </li>

          <li>
            <Link
              href="/listed-books"
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
            >
              Listed Books
            </Link>
          </li>

          <li>
            <Link
              href="/pages-to-read"
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
            >
              Pages to Read
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <button className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:text-emerald-600">
            Sign In
          </button>

          <button className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg border border-gray-200 p-2 text-gray-700 transition-colors hover:bg-gray-50 md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavbarPage;
