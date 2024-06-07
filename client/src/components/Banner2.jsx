import React from 'react'
import { Link } from 'react-router-dom'


const Banner2 = () => {
  return (
    <div className='px-4 lg:px-24 my-28 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src="src/assets/banner2.jpg" className='rounded md:w-5/6' />
      </div>
      <div className="md:w-1/2 space-y-7">
        <h2 className="text-5xl font-bold text-black leading-snug">One Stop Destination For Your <span className='text-purple-600'>Favourite Books</span> !!</h2>
        <p className="mb-10 text-lg mad:w-5/6">Welcome to our "Spotlight Book of the Month" section, where we feature a standout title that's captured our hearts and minds. This month's selection is an unforgettable journey filled with rich storytelling, profound insights, and memorable characters. Don't miss out on this must-read that has been the talk of our bookstore. Dive in and discover why it's our top pick!s</p>
        <Link to='/shop'><button className='bg-purple-600 px-6 py-2 mt-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>Know More</button></Link>
      </div>
    </div>
  )
}

export default Banner2
