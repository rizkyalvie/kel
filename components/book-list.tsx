import React from "react";
import SectionHeading from "./section-heading";
import { getPost } from "@/actions/get-book";
import { myTopFive, bookDb } from "@/lib/book-data";
import { Industry } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export function TopFiveList() {
  return (
    <section className="w-[18rem] sm:w-[64.5rem] mt-10">
      <SectionHeading>My Top 5</SectionHeading>
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
        {myTopFive.map((books) => (
          <React.Fragment key={books.id}>
            <BookCard id={books.id} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export function BookList() {
  return (
    <section className="w-[18rem] sm:w-[64.5rem] mt-10 mb-10">
      <SectionHeading>Book List</SectionHeading>
      <div className="flex flex-col gap-1 sm:w-[70rem] sm:flex-row sm:flex-wrap sm:gap-5 ">
        {bookDb.map((books) => (
          <React.Fragment key={books.id}>
            <BookCard id={books.id} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

async function BookCard({ id }: { id: string }) {
  const bookData = await getPost(id);
  const bookDetails = bookData.volumeInfo;

  const imageUrl = bookDetails.imageLinks.thumbnail;

  return (
    <section className="w-full sm:w-[12rem] border border-black/[0.1] px-2 py-1 sm:px-4 sm:py-3 sm:rounded-lg sm:relative bg-slate-50">
      <Link
        href={`/detail/${id}`}
        className="flex h-[4.2rem] gap-2 sm:flex-col sm:h-[20rem] overflow-hidden sm:justify-center sm:items-center"
      >
        <div className="w-[4rem] h-[rem] sm:w-[10rem] sm:h-[12rem] overflow-hidden sm:flex sm:justify-center sm:items-center">
          <Image src={imageUrl} alt="Books" width={200} height={20} />
        </div>
        <div className="sm:w-[10rem] sm:mt-2">
          <p className="sm:text-xl sm:mb-1 sm:h-14 sm:overflow-hidden">
            {bookDetails.title}
          </p>
          <small>
            By{" "}
            <span className="italic">
              {bookDetails.authors && bookDetails.authors.length > 1
                ? bookDetails.authors
                    .map((item: Industry) => `${item}`)
                    .join(", ")
                : bookDetails.authors}
            </span>
          </small>
        </div>
      </Link>
    </section>
  );
}
