import ReadButton from "@/components/ui/ReadButton";
import WishListButton from "@/components/ui/WishListButton";
import { IBooksType } from "@/types/books.types";
import Image from "next/image";


interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/booksData.json`
  );

  const booksData = await res.json();
  return booksData;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBooksType) => book.bookId === parseInt(id)
  );

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          {/* Book Image */}
          <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-6">
            <Image
              src={book.image}
              alt={book.bookName}
              width={350}
              height={500}
              className="h-auto max-h-125 w-auto rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center">
            <span className="mb-3 w-fit rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
              {book.category}
            </span>

            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{book.bookName}</h1>

            <p className="mt-2 text-lg text-gray-500">
              By <span className="font-semibold text-gray-700">{book.author}</span>
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-900">{book.rating}</span>

              <span className="text-yellow-500">★★★★★</span>
            </div>

            {/* Review */}
            <p className="mt-6 leading-7 text-gray-600">{book.review}</p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {book.tags.map((tag : string) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Book Details */}
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-gray-50 p-5">
              <div>
                <p className="text-sm text-gray-500">Total Pages</p>
                <p className="mt-1 font-semibold text-gray-900">{book.totalPages}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Published</p>
                <p className="mt-1 font-semibold text-gray-900">{book.yearOfPublishing}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Publisher</p>
                <p className="mt-1 font-semibold text-gray-900">{book.publisher}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Book ID</p>
                <p className="mt-1 font-semibold text-gray-900">#{book.bookId}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <ReadButton book={book}/>

              <WishListButton book={book}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;