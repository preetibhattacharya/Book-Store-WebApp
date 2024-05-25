import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const BookCard = ({ headLine, books }) => {
  console.log(books); // Add this line to debug the books array

  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">{headLine}</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map(book => 
            <SwiperSlide key={book._id}>
              <Link to='/'>
                <div>
                  <img src={book.imageURL} alt={book.bookTitle} />
                </div>
                <div>
                  <h3>{book.bookTitle}</h3>
                </div>
              </Link>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
