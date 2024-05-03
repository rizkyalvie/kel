"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { HeaderDetail } from '@/components/header'
import GetBookData from './bookDetail'


function BookDetail() {

  let searchParams = useSearchParams()
  const bookId = searchParams.get("id")

  return (
      <section>
        <HeaderDetail />
        <GetBookData bookId={bookId} />
      </section>
  )
}



export default BookDetail