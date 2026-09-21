import { IBooksType } from '@/types/books.types';
import BookCard from '../booksCard/booksCard';
import getBooks from '@/lib/getBooks';

const BooksPage = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Explore Our Collection
        </span>

        <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
          Discover Your Next Favorite Book
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Explore our collection of timeless classics, inspiring stories, and unforgettable reads.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.slice(0, 8).map((book: IBooksType) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BooksPage;
