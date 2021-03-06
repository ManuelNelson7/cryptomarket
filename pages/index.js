import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

import { Banner, CreatorCard } from '../components'
import images from '../assets'

const Home = () => {
  const parentRef = useRef(null)
  const scrollRef = useRef(null)

  return (
    <div className='flex justify-center sm:px-4 p-12'>
      <div className='w-full minmd:w-4/5'>
        <Banner
          name='Discover, collect and sell extraordinary NFTs'
          parentStyles='justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl'
          childStyles='md:text-4xl sm:text-2xl xs:text-xl'
        />

        <div>
          <h1 className='font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0'>Best Creators</h1>

          <div className='relative flex-1 max-w-full flex mt-3' ref={parentRef}>
            <div className='flex flex-row w-max overflow-x-scroll no-scrollbar select-none' ref={scrollRef}>
              {[6, 7, 9, 9, 10].map((i) => (
                <CreatorCard
                  key={`creator-${i}`}
                  rank={i}
                  creatorImage={images[`creator${i}`]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
