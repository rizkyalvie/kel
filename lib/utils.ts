import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { myTopFiveProps } from "./types";
import fetchBook from '@/app/api/books/route'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getBookDetails(bookId: myTopFiveProps | null) {
  
  let bookProperties = fetchBook(bookId);
  let bookData = bookProperties;

  return bookData
}