import React from 'react'
import { bigShoulders, junge } from '@/lib/fonts'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export function Header() {
  return (
    <header 
      className="w-full text-center sm:flex sm:justify-center sm:items-center mt-16"
    >
      <div
            className="sm:max-w-[36rem] sm:text-center sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-5 "
        >
            <h1 className={`${bigShoulders.className} text-6xl`}>{`Kel's Epic Library`}</h1>
            <p className={`${junge.className} mt-2 text-sm sm:text-lg`}>Step into the treasure trove of my favorite reads, a sanctuary where books reveal their magic through my curated recommendations!</p>
        </div>
    </header>
  )
}

export function HeaderDetail() {
  return (
    <header>
      <div
      className="w-full py-3 text-center sm:py-8 sm:px-[15rem]">
        <h1 className={`${bigShoulders.className} text-3xl`}>
        <Link 
        href="/"
        className="flex justify-center items-center gap-2"
        >
          <FaHome size="1.5rem" />
          {`Kel's Epic Library`}
        </Link>
        </h1>
      </div>
    </header>
  )
}