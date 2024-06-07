import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './BookCard.css'

const BookCard = ({ headLine, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24 w-full">
      <h2 className="text-5xl text-center font-bold text-black my-5">{headLine}</h2>
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="book-card-swiper"
        >
          {books.map(book => (
            <SwiperSlide key={book._id} className='w-full'>
              <Link to={`/book/${book._id}`}>
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 md:h-260px md:w-180px h-150px w-100px">
                  <img src={book.imageUrl} alt={book.bookTitle} className="md:rounded-t-lg object-contain" />
                  <div className="mt-4">
                    <h3 className="text-black-500 text-sm">{book.bookTitle}</h3>
                    <p className="text-gray-500 text-xs">{book.authorName}</p>
                    <h4 className="text-red-400 text-sm text-center">{book.bookPrice}</h4>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
    </div>
  );
};

export default BookCard;
