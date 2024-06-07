import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/all-books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">Find Your Books Here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Link to={`/book/${book._id}`}>
            <div key={book._id} className="bg-light-grey p-4 rounded shadow-lg">
              <div className="text-lg font-semibold text-gray-600 mb-2">
                {book.category}
              </div>
              <img src={book.imageUrl} alt="" className="h-96 w-full object-cover rounded" />
              <h4 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white mt-4">
                <p>{book.bookTitle}</p>
              </h4>
              <p className="font-bold text-red-700 mt-2 text-center">
                <p>{book.bookPrice}</p>
              </p>
              <button className="bg-indigo-700 font-semibold text-white py-2 rounded mt-4 w-full text-center">
                Want to Read
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
