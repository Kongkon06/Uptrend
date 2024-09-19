"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { initialProducts } from '@/app/asset';

const HeroSlider = () => {
  const product = initialProducts;
  return (
    <div className='h-[50vh] '>
      <Swiper
        direction={'vertical'}
        loop={true}
        centeredSlides={true}
        slidesPerView={2}
        autoplay={{ delay: 1500 }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='bg-red-300 min-h-[100vh]'>
          <span className='relative'>
            <img
              className="h-full w-full object-contain"
              src={product[0].image}
              alt="something"
            />
          </span>
        </SwiperSlide>
        <SwiperSlide className=' min-h-[100vh]'><img className="h-full w-full object-contain" src={product[0].image} alt="something"/></SwiperSlide>
        <SwiperSlide className=' min-h-[100vh]'><img className='h-full w-full object-cover' src={product[1].image} /></SwiperSlide>
        <SwiperSlide className=' min-h-[100vh]'><img className='h-full w-full object-cover' src={product[2].image} /></SwiperSlide>
        <SwiperSlide className=' min-h-[100vh]'><img className='h-full w-full object-cover' src={product[3].image} /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider
