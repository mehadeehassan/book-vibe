import { IBooksType } from '@/types/books.types';
import Image from 'next/image';

interface IListedBookCardProps {
  book: IBooksType;
  type: 'read' | 'wishlist';
}

const ListedBookCard = ({ book, type }: IListedBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
      <div className="flex flex-col gap-5 p-4 sm:flex-row">
        {/* Book Image */}
        <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-48 sm:w-32">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Status */}
          <div className="absolute left-2 top-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm ${
                type === 'read' ? 'bg-emerald-600' : 'bg-pink-500'
              }`}
            >
              {type === 'read' ? 'Read' : 'Wishlist'}
            </span>
          </div>
        </div>

        {/* Book Content */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                {book.category}
              </span>

              <span className="text-xs text-gray-400">
                #{book.bookId}
              </span>
            </div>

            <h3 className="line-clamp-1 text-xl font-bold text-gray-800 transition-colors group-hover:text-emerald-600">
              {book.bookName}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              by <span className="font-medium text-gray-700">{book.author}</span>
            </p>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
              {book.review}
            </p>
          </div>

          {/* Bottom Info */}
          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-600">
              ⭐ {book.rating}
            </div>

            <div className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
              📖 {book.totalPages} Pages
            </div>

            <div className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
              📅 {book.yearOfPublishing}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;