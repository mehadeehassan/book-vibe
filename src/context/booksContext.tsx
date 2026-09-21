'use client';

import React, { createContext, ReactNode, useState } from 'react';

import { IBooksType } from '@/types/books.types';

interface IBooksContext {
  readBooks: IBooksType[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBooksType[]>>;
  wishList: IBooksType[];
  setWishList: React.Dispatch<React.SetStateAction<IBooksType[]>>;
}

export const BooksContext = createContext<IBooksContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishList: [],
  setWishList: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBooksType[]>([]);
  const [wishList, setWishList] = useState<IBooksType[]>([]);

  return (
    <BooksContext.Provider
      value={{
        readBooks,
        setReadBooks,
        wishList,
        setWishList,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
