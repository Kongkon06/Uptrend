"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { initialProducts } from '@/app/asset';
const HeroSlider = () => {
  const productlist = initialProducts;
    return (
        <div className='h-[50vh]'>
          <Swiper 
            direction={'horizontal'} 
            loop= {true}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{ delay: 1500 }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className='h-[50vh] bg-red-300'>
                <img src="https://img.freepik.com/premium-vector/new-arrival-sale-banner_79298-58.jpg?w=996" alt='' className='object-cover'/>
            </SwiperSlide>
            <SwiperSlide className='h-[50vh] '>
            <img src="https://img.freepik.com/premium-vector/offer-sale-banner_79298-57.jpg?w=996" className='object-cover' />
            </SwiperSlide>
            <SwiperSlide className='h-[50vh] bg-blue-300'>
            <img  src="https://overlaysnow.com/cdn/shop/files/Coming-Soon.jpg" className='object-cover' />
            </SwiperSlide>
            <SwiperSlide className='h-[50vh] bg-green-300'>
            <img  src="https://overlaysnow.com/cdn/shop/files/Fearless.jpg" className='object-cover' />
            </SwiperSlide>
          </Swiper>
        </div>
      );
}

export default HeroSlider
        


