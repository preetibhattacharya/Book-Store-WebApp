import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/effect-cards';
import './BannerCard.css';
// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
  <div>
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide style={{ backgroundImage: "url('src/assets/banner-books/book1_slider.jpg')" }}></SwiperSlide>
      <SwiperSlide style={{ backgroundImage: "url('src/assets/banner-books/book2_slider.jpg')" }}></SwiperSlide>
      <SwiperSlide style={{ backgroundImage: "url('src/assets/banner-books/book3_slider.jpg')" }}></SwiperSlide>
      <SwiperSlide style={{ backgroundImage: "url('src/assets/banner-books/book4_slider.jpg')" }}></SwiperSlide>
      <SwiperSlide style={{ backgroundImage: "url('src/assets/banner-books/book5_slider.jpg')" }}></SwiperSlide>
      <SwiperSlide style={{ backgroundImage: "url('src/assets/banner-books/book6_slider.jpg')" }}></SwiperSlide>
    </Swiper>
  </div>
  )
}

export default BannerCard
