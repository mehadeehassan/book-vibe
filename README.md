# 📚 Book Vibe

> A modern and responsive book discovery and reading management application built with **Next.js, TypeScript, Tailwind CSS, React Context API, and Recharts**.

Book Vibe allows users to explore books, view detailed information, manage their read books and wishlist, and visualize their reading progress through interactive charts.

---

## ✨ Features

* 📚 Browse available books
* 🔎 View detailed information about each book
* 📖 Add books to **Read Books**
* ❤️ Add books to **Wishlist**
* 📊 Visualize reading statistics with interactive charts
* 📄 Track total pages read
* 📈 Calculate average pages per book
* 🔃 Sort listed books by:

  * Rating
  * Number of Pages
  * Published Year
* 📱 Fully responsive design
* ⚡ Next.js App Router
* 💀 Skeleton loading states
* 🚫 Custom 404 / Not Found page
* 🔔 Toast notifications
* 🎨 Modern and clean UI
* 🌐 Client-side state management using React Context API

---

## 🛠️ Technology Stack

| Technology            | Purpose                          |
| --------------------- | -------------------------------- |
| **Next.js**           | React framework and routing      |
| **TypeScript**        | Type safety                      |
| **React**             | UI development                   |
| **Tailwind CSS**      | Styling and responsive design    |
| **React Context API** | Global state management          |
| **Recharts**          | Reading statistics visualization |
| **React Toastify**    | User notifications               |
| **JSON**              | Local book data                  |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── books/
│   │   ├── [id]/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── loading.tsx
│   │   └── page.tsx
│   │
│   ├── listed-books/
│   │   ├── loading.tsx
│   │   └── page.tsx
│   │
│   ├── pages-to-read/
│   │   ├── loading.tsx
│   │   └── page.tsx
│   │
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── BookCard/
│   ├── BookDetailsCard/
│   ├── Navbar/
│   ├── Footer/
│   └── ...
│
├── context/
│   └── BooksContext.tsx
│
└── types/
    └── books.type.ts

public/
└── data/
    └── booksData.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd book-vibe
```

### 3. Install dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

Or using pnpm:

```bash
pnpm install
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

The application uses this URL to fetch the book data:

```text
/data/booksData.json
```

> Note: Because the JSON file is inside the `public` directory, `/public` should not be included in the URL.

---

## 📚 Book Data

Book information is stored in:

```text
public/data/booksData.json
```

Each book follows the `IBook` / book data structure.

Example:

```json
{
  "bookId": 1,
  "bookName": "Example Book",
  "author": "Example Author",
  "image": "https://example.com/book.jpg",
  "review": "An interesting book.",
  "totalPages": 320,
  "rating": 4.5,
  "category": "Fiction",
  "tags": ["Fiction", "Adventure"],
  "publisher": "Example Publisher",
  "yearOfPublishing": 2024
}
```

---

## 🧭 Application Routes

| Route            | Description             |
| ---------------- | ----------------------- |
| `/`              | Home page               |
| `/books`         | Browse all books        |
| `/books/[id]`    | Book details            |
| `/listed-books`  | Read books and wishlist |
| `/pages-to-read` | Reading statistics      |
| Invalid Route    | Custom 404 page         |

---

## 📖 Read Books

Users can add a book to their read list from the book details page.

The application stores the selected books inside the global `BooksContext`.

```tsx
const { readBooks, setReadBooks } = useContext(BooksContext);
```

The Read Books section displays:

* Book title
* Author
* Category
* Rating
* Number of pages
* Publishing year
* Publisher

---

## ❤️ Wishlist

Users can save books to their wishlist.

Wishlist data is also managed globally through `BooksContext`.

```tsx
const { wishList, setWishList } = useContext(BooksContext);
```

---

## 📊 Reading Statistics

The **Pages To Read** section uses **Recharts** to visualize reading activity.

The chart displays:

* Book name
* Total pages
* Reading statistics
* Total books
* Total pages
* Average pages per book

Example calculation:

```tsx
const totalPages = readBooks.reduce(
  (total, book) => total + book.totalPages,
  0
);
```

Average pages:

```tsx
const averagePages =
  readBooks.length > 0
    ? Math.round(totalPages / readBooks.length)
    : 0;
```

---

## 🔃 Sorting

Listed books can be sorted by:

### ⭐ Rating

```text
Highest → Lowest
```

### 📄 Number of Pages

```text
Most Pages → Least Pages
```

### 📅 Published Year

```text
Newest → Oldest
```

Sorting is applied only to the currently active tab.

---

## 💀 Loading States

Book Vibe includes route-specific skeleton loading screens using Next.js `loading.tsx`.

```text
app/
├── loading.tsx
├── books/
│   ├── loading.tsx
│   └── [id]/
│       └── loading.tsx
├── listed-books/
│   └── loading.tsx
└── pages-to-read/
    └── loading.tsx
```

This provides a better user experience while pages or data are loading.

---

## 🚫 Custom 404 Page

The project includes a custom:

```text
src/app/not-found.tsx
```

If a user visits an invalid route, they will see a custom Book Vibe 404 page instead of the default Next.js error page.

---

## 🔔 Notifications

The project uses **React Toastify** to provide feedback after user actions.

Examples:

```text
You have read [Book Name]
```

```text
You have added [Book Name] to your wishlist
```

---

## 📱 Responsive Design

Book Vibe is designed to work across:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

Tailwind CSS responsive utilities are used throughout the application.

---

## 🧠 State Management

Global book-related state is handled using the React Context API.

### BooksContext

```text
BooksContext
│
├── readBooks
├── setReadBooks
├── wishList
└── setWishList
```

The provider wraps the application from the root layout:

```tsx
<BooksProvider>
  {children}
</BooksProvider>
```

This allows different pages and components to access the same book state.

---

## 🏃 Run the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

---

## 🔍 Useful Commands

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## 🌐 Deployment

The project can be deployed to platforms that support Next.js applications.

Recommended deployment flow:

```text
GitHub
   ↓
Push Project
   ↓
Connect Repository
   ↓
Configure Environment Variables
   ↓
Deploy
   ↓
Live Website 🚀
```

Before deploying, make sure the production environment contains:

```env
NEXT_PUBLIC_BASE_URL=YOUR_PRODUCTION_URL
```

---

## 🎯 Future Improvements

Some possible future improvements:

* 🔐 User authentication
* 💾 Persistent database storage
* 🔍 Advanced book search
* 🏷️ Category filtering
* 📚 Pagination
* ❤️ Persistent wishlist
* 📖 Reading progress tracking
* 🌙 Dark mode
* 👤 User profile
* ☁️ Cloud image storage
* 🔄 Backend API integration

---

## 👨‍💻 Developer

**Book Vibe**
A modern book discovery and reading management application.

Built with ❤️ using:

```text
Next.js
TypeScript
React
Tailwind CSS
Recharts
```

---

## 📄 License

This project is created for learning and development purposes.

You are free to modify and improve it according to your requirements.

---

### ⭐ If you like this project

Give the repository a ⭐ on GitHub and feel free to improve the project!
