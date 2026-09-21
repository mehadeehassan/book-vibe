'use client';

import { BooksContext } from '@/context/booksContext';
import { IBooksType } from '@/types/books.types';
import Image from 'next/image';
import { useContext, useState } from 'react';

const LisedtBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);

  // Active tab
  const [activeTab, setActiveTab] = useState<'read' | 'wishlist'>('read');

  // Sorting
  const [sortBy, setSortBy] = useState<'rating' | 'pages' | 'year'>('rating');

  // Sort books
  const sortBooks = (books: IBooksType[]) => {
    const sortedBooks = [...books];

    if (sortBy === 'rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'pages') {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === 'year') {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

  // Active books
  const activeBooks = activeTab === 'read' ? readBooks : wishList;

  // Sorted active books
  const sortedBooks = sortBooks(activeBooks);

  return (
    <div className="container mx-auto px-4 py-10 md:py-14">
      {/* ==================== HERO ==================== */}
      <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-500 px-6 py-10 text-white shadow-xl md:px-10 md:py-14">
        {/* Background Decoration */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-sm" />

        <div className="absolute -bottom-32 right-20 h-80 w-80 rounded-full bg-teal-300/10 blur-sm" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/5" />

        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
          {/* Heading */}
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-200" />
              Your Personal Library
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">My Books</h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50 md:text-base">
              Organize your reading journey, keep track of books you&apos;ve read, and save your
              favorite books for later.
            </p>
          </div>

          {/* Mini Stats */}
          <div className="flex gap-3">
            {/* Read */}
            <div className="min-w-26.25 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center backdrop-blur-md">
              <p className="text-2xl font-bold">{readBooks.length}</p>

              <p className="mt-1 text-xs text-emerald-100">Read</p>
            </div>

            {/* Wishlist */}
            <div className="min-w-26.25 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center backdrop-blur-md">
              <p className="text-2xl font-bold">{wishList.length}</p>

              <p className="mt-1 text-xs text-emerald-100">Wishlist</p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== TABS + SORT ==================== */}
      <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* ==================== TABS ==================== */}
        <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-gray-50 p-1.5 shadow-sm">
          <div className="flex">
            {/* Read Books */}
            <button
              type="button"
              onClick={() => setActiveTab('read')}
              className={`group flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                activeTab === 'read'
                  ? 'bg-white text-emerald-600 shadow-md'
                  : 'text-gray-500 hover:text-emerald-600'
              }`}
            >
              <span className="transition-transform group-hover:scale-105">📖</span>

              <span>Read Books</span>

              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-600">
                {readBooks.length}
              </span>
            </button>

            {/* Wishlist */}
            <button
              type="button"
              onClick={() => setActiveTab('wishlist')}
              className={`group flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                activeTab === 'wishlist'
                  ? 'bg-white text-pink-600 shadow-md'
                  : 'text-gray-500 hover:text-pink-600'
              }`}
            >
              <span className="text-xl transition-transform group-hover:scale-105">♡</span>

              <span>Wishlist</span>

              <span className="rounded-full bg-pink-100 px-2.5 py-1 text-xs font-bold text-pink-600">
                {wishList.length}
              </span>
            </button>
          </div>
        </div>

        {/* ==================== SORT DROPDOWN ==================== */}
        <div className="flex items-center justify-end">
          <details className="group relative w-72">
            {/* Label */}
            <span className="absolute -top-2.5 left-4 z-20 bg-white px-2 text-xs font-bold tracking-widest text-emerald-600">
              SORT BOOKS
            </span>

            {/* Main Button */}
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3.5 shadow-[0_5px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M6 12h12m-9 6h6" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-400">Sort books</p>

                  <p className="text-sm font-semibold text-gray-700">
                    {sortBy === 'rating'
                      ? 'Highest Rating'
                      : sortBy === 'pages'
                        ? 'Most Pages'
                        : 'Newest Published'}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:bg-emerald-50 group-open:text-emerald-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </summary>

            {/* Dropdown */}
            <div className="absolute left-0 right-0 top-full z-50 mt-3 rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
              {/* Header */}
              <div className="px-3 pb-2 pt-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Choose sorting
                </p>
              </div>

              {/* Rating */}
              <button
                type="button"
                onClick={() => setSortBy('rating')}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                  sortBy === 'rating' ? 'bg-emerald-50' : 'hover:bg-emerald-50'
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-lg">
                  ⭐
                </span>

                <span className="flex-1">
                  <span
                    className={`block text-sm font-semibold ${
                      sortBy === 'rating'
                        ? 'text-emerald-600'
                        : 'text-gray-700 group-hover:text-emerald-600'
                    }`}
                  >
                    Rating
                  </span>

                  <span className="block text-xs text-gray-400">Highest rated first</span>
                </span>

                {sortBy === 'rating' && <span className="font-bold text-emerald-500">✓</span>}
              </button>

              {/* Pages */}
              <button
                type="button"
                onClick={() => setSortBy('pages')}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                  sortBy === 'pages' ? 'bg-emerald-50' : 'hover:bg-emerald-50'
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">
                  📖
                </span>

                <span className="flex-1">
                  <span
                    className={`block text-sm font-semibold ${
                      sortBy === 'pages'
                        ? 'text-emerald-600'
                        : 'text-gray-700 group-hover:text-emerald-600'
                    }`}
                  >
                    Number of Pages
                  </span>

                  <span className="block text-xs text-gray-400">Most pages first</span>
                </span>

                {sortBy === 'pages' && <span className="font-bold text-emerald-500">✓</span>}
              </button>

              {/* Year */}
              <button
                type="button"
                onClick={() => setSortBy('year')}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                  sortBy === 'year' ? 'bg-emerald-50' : 'hover:bg-emerald-50'
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-lg">
                  📅
                </span>

                <span className="flex-1">
                  <span
                    className={`block text-sm font-semibold ${
                      sortBy === 'year'
                        ? 'text-emerald-600'
                        : 'text-gray-700 group-hover:text-emerald-600'
                    }`}
                  >
                    Published Year
                  </span>

                  <span className="block text-xs text-gray-400">Newest books first</span>
                </span>

                {sortBy === 'year' && <span className="font-bold text-emerald-500">✓</span>}
              </button>
            </div>
          </details>
        </div>
      </div>

      {/* ==================== DIVIDER ==================== */}
      <div className="mt-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-200" />

        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          {activeTab === 'read' ? 'Read Books' : 'Wishlist'}
        </span>

        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* ==================== BOOK LIST ==================== */}
      <div className="mt-8 space-y-5">
        {sortedBooks.length > 0 ? (
          sortedBooks.map((book: IBooksType) => (
            <div
              key={`${activeTab}-${book.bookId}`}
              className={`group overflow-hidden rounded-3xl border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-5 ${
                activeTab === 'read'
                  ? 'border-gray-200 hover:border-emerald-200'
                  : 'border-gray-200 hover:border-pink-200'
              }`}
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                {/* Image */}
                <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:h-48 sm:w-32">
                  <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Status */}
                  <div className="absolute left-3 top-3">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg ${
                        activeTab === 'read' ? 'bg-emerald-600' : 'bg-pink-500'
                      }`}
                    >
                      {activeTab === 'read' ? 'Read' : 'Wishlist'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    {/* Category + ID */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          activeTab === 'read'
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-pink-50 text-pink-600'
                        }`}
                      >
                        {book.category}
                      </span>

                      <span className="text-xs text-gray-400">Book #{book.bookId}</span>
                    </div>

                    {/* Book Name */}
                    <h2
                      className={`text-xl font-bold text-gray-800 transition-colors md:text-2xl ${
                        activeTab === 'read'
                          ? 'group-hover:text-emerald-600'
                          : 'group-hover:text-pink-600'
                      }`}
                    >
                      {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-1 text-sm text-gray-500">
                      by <span className="font-semibold text-gray-700">{book.author}</span>
                    </p>

                    {/* Review */}
                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
                      {book.review}
                    </p>
                  </div>

                  {/* Bottom Info */}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                    {/* Rating */}
                    <span className="rounded-xl bg-amber-50 px-3 py-2 text-xs font-bold text-amber-600">
                      ⭐ {book.rating}
                    </span>

                    {/* Pages */}
                    <span className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600">
                      📖 {book.totalPages} Pages
                    </span>

                    {/* Year */}
                    <span className="rounded-xl bg-purple-50 px-3 py-2 text-xs font-semibold text-purple-600">
                      📅 {book.yearOfPublishing}
                    </span>

                    {/* Publisher */}
                    <span className="rounded-xl bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600">
                      🏢 {book.publisher}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* Empty State */
          <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
            <div
              className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl text-4xl ${
                activeTab === 'read' ? 'bg-emerald-50' : 'bg-pink-50'
              }`}
            >
              {activeTab === 'read' ? '📖' : '♡'}
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-700">
              {activeTab === 'read' ? 'No Read Books Yet' : 'Your Wishlist Is Empty'}
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              {activeTab === 'read'
                ? 'Books that you mark as read will appear here. Start exploring books and build your reading collection.'
                : 'Books that you add to your wishlist will appear here. Find something you love and save it for later.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LisedtBooks;
