import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaShoppingCart } from 'react-icons/fa';

const SingleBook = () => {
  const { _id, bookTitle, authorName, imageUrl, category, bookPrice, bookDescription } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <img className='h-full w-full object-fill md:h-full md:w-full' src={imageUrl} alt={bookTitle} />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>Category: {category}</div>
            <h2 className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>{bookTitle}</h2>
            <p className='mt-2 text-gray-500'>by {authorName}</p>
            <p className='mt-4 text-gray-700'>{bookDescription}</p>
            <p className='mt-6 text-2xl font-bold text-red-700'>{bookPrice}</p>

            <div className='mt-4 items-center'>
              <span className='text-yellow-400 flex flex-row'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
              <span className='ml-2 text-gray-600'>(4.5)</span>
            </div>

            <button className='mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center'>
              <FaShoppingCart className='mr-2' /> Add to Cart
            </button>

            <button className='mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 flex items-center'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
