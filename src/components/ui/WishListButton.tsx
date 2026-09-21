'use client';

import { BooksContext } from '@/context/booksContext';
import { IBooksType } from '@/types/books.types';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: IBooksType }) => {
  const { wishList, setWishList } = useContext(BooksContext);

  const handleWishList = () => {
    setWishList((prevBooks) => {
      const updatedBooks = [...prevBooks, book];

      return updatedBooks;
    });

    toast.success(`You have added ${book.bookName} to your wishlist`);
  };

  return (
    <button
      className="rounded-xl border border-emerald-600 px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50"
      onClick={handleWishList}
    >
      Wishlist
    </button>
  );
};

export default WishListButton;
