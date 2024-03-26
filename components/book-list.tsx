import React from 'react'
import SectionHeading from './section-heading'
import { getBookDetails } from '@/lib/utils'
import { myTopFive, bookDb } from '@/lib/book-data'
import { Industry } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { myTopFiveProps } from '@/lib/types'

export function TopFiveList() {

  return (
    <section
      className="mt-10 mb-10"
    >
      <SectionHeading>
        My Top 5
      </SectionHeading>
      <div
        className="flex gap-5"
      >
        {myTopFive.map(books => (
          <React.Fragment key={books.id}>
            <BookCard id={books.id} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export function BookList() {

  return (
    <section
      className="mb-10"
    >
      <SectionHeading>
        Book List
      </SectionHeading>
      <div
        className="max-w-[65rem] flex flex-wrap gap-5 "
      >
        {bookDb.map(books => (
          <React.Fragment key={books.id}>
            <BookCard id={books.id} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

async function BookCard({id}: {id: string}) {
  "use server"

  const bookData = await getBookDetails(id)
  const bookDetails = bookData.volumeInfo

  const imageUrl = bookDetails.imageLinks.thumbnail;

  return (
    <section
      className="w-[12rem] border border-black/[0.1] px-4 py-3 rounded-lg relative bg-slate-50"
    >
      <Link
         href={`/detail?id=${id}`}
         className="flex flex-col justify-center items-center"
      >
        <div
          className="w-[10rem] h-[12rem] overflow-hidden flex justify-center items-center"
        >
        <Image 
          src={imageUrl}
          alt="Books"
          width={200}
          height={20}
        />
        </div>
        <div
          className="w-[10rem] mt-2"
        >
          <p
            className="text-xl mb-1 h-14 overflow-hidden"
          >{bookDetails.title}</p>
          <small
          >By <span className="italic">{
            bookDetails.authors && bookDetails.authors.length > 1 ?  bookDetails.authors.map((item: Industry) => `${item}`)
            .join(", ") : bookDetails.authors}
            </span></small>
        </div>
      </Link>
    </section>
  );
}