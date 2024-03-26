import React from 'react'
import { bigShoulders, junge } from '@/lib/fonts'
import Link from 'next/link'

export function Header() {
  return (
    <header 
      className="w-full text-center flex justify-center items-center mt-16"
    >
      <div
            className="max-w-[36rem] text-center flex flex-col justify-center items-center gap-y-5 "
        >
            <h1 className={`${bigShoulders.className} text-6xl`}>{`Kel's Epic Library`}</h1>
            <p className={`${junge.className} text-lg`}>Step into the treasure trove of my favorite reads, a sanctuary where books reveal their magic through my curated recommendations!</p>
        </div>
    </header>
  )
}

export function HeaderDetail() {
  return (
    <header>
      <div
      className="w-full py-8 text-center ">
        <Link 
        href="/"
        >
          
      <h1 className={`${bigShoulders.className} text-3xl`}>{`Kel's Epic Library`}</h1>
        </Link>
      </div>
    </header>
  )
}