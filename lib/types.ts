import { myTopFive } from "./book-data";

export type myTopFiveProps = typeof myTopFive[number]["id"]

export interface BookDataProps {
  bookData: any;
  bookDetail: any;
  publicationDate: string;
}

export interface Industry {
    type: string;
    identifier: string;
    length: number;
  }

