import fs from "fs/promises";
import path from "path";

import { IBooksType } from "@/types/books.types";

const getBooks = async (): Promise<IBooksType[]> => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "booksData.json"
  );

  const file = await fs.readFile(filePath, "utf-8");

  return JSON.parse(file);
};

export default getBooks;