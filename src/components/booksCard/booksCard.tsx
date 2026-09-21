import { IBooksType } from '@/types/books.types';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ book }: { book: IBooksType }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/10">
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Review */}
        {/* <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
          {book.review}
        </p> */}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-gray-100" />

        {/* Book Information */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Pages</p>
            <p className="mt-1 font-semibold text-gray-800">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-gray-400">Published</p>
            <p className="mt-1 font-semibold text-gray-800">{book.yearOfPublishing}</p>
          </div>

          <div>
            <p className="text-gray-400">Publisher</p>
            <p className="mt-1 truncate font-semibold text-gray-800">{book.publisher}</p>
          </div>

          <div>
            <p className="text-gray-400">Book ID</p>
            <p className="mt-1 font-semibold text-gray-800">#{book.bookId}</p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="mt-6 w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20">
            View Details
          </button>
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
