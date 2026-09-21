import NavbarPage from '@/components/navbar/navbar';
import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';

import { Work_Sans } from 'next/font/google';
import FooterPage from '@/components/footer/page';
import { ToastContainer } from 'react-toastify';
import BooksProvider from '@/context/booksContext';

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Book Vibe',
  description: 'Book Vibe is a social media platform for book lovers.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${workSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <BooksProvider>
        <NavbarPage />
        <div>{children}</div>
        <FooterPage />
        <ToastContainer/>
        </BooksProvider>
      </body>
    </html>
  );
}
