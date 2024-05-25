import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-violet-200 flex items-center'>
        <div className='flex w-col flex-col md:flex-row justify-between items-center gap-6 py-36'>
            <div className='md:w-4/5 space-y-8 h-full'>
                <h2 className="text-5xl font-bold text-black leading-snug">Buy and Sell <span className='text-violet-600'>at Best Prices</span></h2>
                <p className='md:w-3/4'>Welcome to <span className='text-violet-500'>The Book Emporium</span> your ultimate destination for buying and selling books! Discover, trade, and connect with fellow book lovers in a seamless and enchanting marketplace.
                     Whether you’re looking to find your next great read or give your beloved books a new home,
                     BookHaven is the place where stories never end. Dive into a world of endless literary possibilities today!</p>
            
                 <div>
                    <input type="search" name="search" id="search" placeholder="Search a Book" className="py-2 px-2 rounded-s-sm outline-none"/>
                    <button className='bg-violet-600 px-6 py-2 mt-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
        </div>

        <div className='mr-24'>
            <BannerCard/>
        </div>
    </div>
  )
}

export default Banner
