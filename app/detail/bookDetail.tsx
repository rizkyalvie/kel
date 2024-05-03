
import Image from "next/image"
import { getBookDetails } from "@/lib/utils"
import moment from "moment"
import { Industry } from '@/lib/types'

export default async function GetBookData({bookId}: {bookId: string | null}) {

    const bookData = await getBookDetails(bookId)
    const bookDetail = bookData.volumeInfo
    const publicationDate = moment(bookDetail.publishedDate).format("MMMM YYYY")
  
    return (
      
      <section
        className="px-[1rem]"
      >
      <div
        className="text-center sm:px-[15rem] sm:mt-9 sm:flex gap-2 sm:gap-5"
      >
        <div
          className="flex justify-center sm:w-[20rem] sm:h-[25rem] sm:overflow-hidden"
        >
        <Image 
          src={bookDetail.imageLinks.thumbnail}
          alt="book"
          width={100}
          height={0}
          quality={95}
          className="w-[8rem] sm:w-[20rem] sm:h-auto"
        />
        </div>
        <div
          className="mt-5 sm:mt-0 sm:flex sm:flex-col sm:gap-y-5 sm:mb-10"
        >
        <p
          className="sm:text-4xl font-bold"
        >
          {bookDetail.title}
        </p>
        <p
          className="sm:-mt-2"
        >
          By <span className="italic">{
            bookDetail.authors && bookDetail.authors.length > 1 ?  bookDetail.authors.map((item: Industry) => `${item}`)
            .join(", ") : bookDetail.authors}
            </span>
        </p>
        <span>
        <p
        className="sm:text-xl font-semibold"
        >
        Publication Date
        </p>
        <p>
        {publicationDate}
        </p>
        </span>
        <span>
        <p
        className="sm:text-xl font-semibold"
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
        className="sm:text-xl font-semibold"
        >
        Pages
        </p>
        <p>
        {bookDetail.pageCount}
        </p>
        </span>
        <span>
        <p
        className="sm:text-xl font-semibold"
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
        className="sm:px-[15rem] mt-5 mb-5 sm:mb-0 sm:mt-16"
      >
      <p
        className="mb-5 text-lg sm:text-4xl font-bold sm:mb-10 text-center"
      >Description</p>
      {bookDetail.description ?
      <div
        className="text-sm sm:text-lg text-justify"
        dangerouslySetInnerHTML={{ __html: bookDetail.description }}
        /> : "No Description Available"}
      </div>
    </section>
    )
  }