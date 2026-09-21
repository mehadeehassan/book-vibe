'use client';

import { BooksContext } from '@/context/booksContext';
import { IBooksType } from '@/types/books.types';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBooksType }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  const handleReadBook = () => {
    setReadBooks((prevBooks) => {
      const newBooks = [...prevBooks, book];
      return newBooks;
    });

    toast.success(`You have read ${book.bookName}`);
  };

  return (
    <button
      className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
      onClick={handleReadBook}
    >
      Read Book
    </button>
  );
};

export default ReadButton;
