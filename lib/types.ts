import { myTopFive } from "./book-data";

export type myTopFiveProps = (typeof myTopFive)[number]["id"];

export interface Industry {
  type: string;
  identifier: string;
  length: number;
}
