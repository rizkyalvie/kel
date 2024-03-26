import React from 'react'
import { bigShoulders } from '@/lib/fonts'

function Intro() {
  return (
    <section 
        className={`w-full flex items-center justify-center`}
    >
        <div
            className="max-w-[24rem] text-center flex flex-col gap-y-3"
        >
            <p className={`${bigShoulders.className} text-6xl`}>{`Kel's Epic Library`}</p>
            <p>Step into the treasure trove of my favorite reads, a sanctuary where books reveal their magic through my curated recommendations!</p>
        </div>
    </section>
  )
}

export default Intro