"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { initialProducts } from '@/app/asset';
import Logo2 from '@/components/assets/Logo2.png'
import Image from 'next/image';
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
                <img src={productlist[10].image} alt='' className='object-cover'/>
            </SwiperSlide>
            <SwiperSlide className='h-[50vh] '>
            <img src={productlist[7].image} className='object-cover' />
            </SwiperSlide>
            <SwiperSlide className='h-[50vh] bg-blue-300'>
            <img  src={productlist[8].image} className='object-cover' />
            </SwiperSlide>
            <SwiperSlide className='h-[50vh] bg-green-300'>
            <img  src={productlist[9].image} className='object-cover' />
            </SwiperSlide>
            <SwiperSlide className='h-[50vh] bg-yellow-300'>
            <img  src={productlist[6].image} className=' object-cover' />
              </SwiperSlide> 
          </Swiper>
        </div>
      );
}

export default HeroSlider
        


