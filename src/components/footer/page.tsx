import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/favicon.png';

const FooterPage = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                <Image
                  src={logo}
                  alt="Book Vibe logo"
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Book<span className="text-emerald-400">Vibe</span>
              </h2>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              Discover amazing books, explore new stories, and build a bookshelf filled with books
              you love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-emerald-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/listed-books" className="transition-colors hover:text-emerald-400">
                  Listed Books
                </Link>
              </li>

              <li>
                <Link href="/pages-to-read" className="transition-colors hover:text-emerald-400">
                  Pages to Read
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="transition-colors hover:text-emerald-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition-colors hover:text-emerald-400">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="transition-colors hover:text-emerald-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-400">
              Stay connected and discover more book recommendations.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-gray-300 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-gray-300 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-gray-300 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-gray-300 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
              >
                Git
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-6 text-center text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} BookVibe. All rights reserved.</p>

          <p>
            <Link href="/privacy">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
