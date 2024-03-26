"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { getBookDetails } from '@/lib/utils'
import { HeaderDetail } from '@/components/header'
import { Industry } from '@/lib/types'
import Image from 'next/image'
import moment from 'moment'

function BookDetail() {

  let searchParams = useSearchParams()
  const bookId = searchParams.get("id")

  return (
      <React.Fragment>
        <HeaderDetail />
      <BookData bookId={bookId} />
      </React.Fragment>
  )
}

async function BookData({bookId}: {bookId: string | null}) {

  const bookData = await getBookDetails(bookId)
  const bookDetail = bookData.volumeInfo
  const publicationDate = moment(bookDetail.publishedDate).format("MMMM YYYY")

  return (
    <section>
      <div
        className="px-[15rem] mt-9 flex gap-5"
      >
        <div
          className="w-[20rem] h-[25rem] overflow-hidden"
        >
        <Image 
          src={bookDetail.imageLinks.thumbnail}
          alt="book"
          width={100}
          height={0}
          quality={95}
          className="w-[20rem] h-auto"
        />
        </div>
        <div
          className="flex flex-col gap-y-5 mb-10"
        >
        <p
          className="text-4xl font-bold"
        >
          {bookDetail.title}
        </p>
        <p
          className="-mt-2"
        >
          By <span className="italic">{
            bookDetail.authors && bookDetail.authors.length > 1 ?  bookDetail.authors.map((item: Industry) => `${item}`)
            .join(", ") : bookDetail.authors}
            </span>
        </p>
        <span>
        <p
        className="text-xl font-semibold"
        >
        Publication Date
        </p>
        <p>
        {publicationDate}
        </p>
        </span>
        <span>
        <p
        className="text-xl font-semibold"
        >
        ISBN
        </p>
        <p>
        {bookDetail.industryIdentifiers ? bookDetail.industryIdentifiers
            .toReversed()
            .map((item: Industry) => `${item.identifier}`)
            .join(", ") : bookDetail.industryIdentifiers}
        </p>
        </span>
        <span>
        <p
        className="text-xl font-semibold"
        >
        Pages
        </p>
        <p>
        {bookDetail.pageCount}
        </p>
        </span>
        <span>
        <p
        className="text-xl font-semibold"
        >
        Price
        </p>
        <p>
        {bookData.saleInfo.listPrice ? 
        new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(bookData.saleInfo.listPrice.amount) : "No Price Available"}
        </p>
        </span>
        </div>
      </div>
      <div
        className="px-[15rem] mt-16"
      >
      <p
        className="text-4xl font-bold mb-10"
      >Description</p>
      <div
        className="text-lg text-justify"
        dangerouslySetInnerHTML={{ __html: bookDetail.description }}
        />
      </div>
    </section>
  )
}

export default BookDetail