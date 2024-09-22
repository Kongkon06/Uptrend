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
        <div className='h-[50vh] '>
          <Swiper 
            direction={'vertical'} 
            loop= {true}
            centeredSlides={true}
            slidesPerView={3}
            autoplay={{ delay: 1500 }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className='h-[50vh] bg-red-300'>
                <Image src={Logo2} alt='' className='object-cover'/>
            </SwiperSlide>
            <SwiperSlide className='  min-h-[100vh]'>
            <img src={productlist[7].image} className='object-cover' />
            </SwiperSlide>
            <SwiperSlide className='bg-blue-300 min-h-[100vh]'>
            <img  src={productlist[8].image} className='object-cover' />
            </SwiperSlide>
            <SwiperSlide className='bg-green-300 min-h-[100vh]'>
            <img  src={productlist[8].image} className='object-cover' />
            </SwiperSlide>
            <SwiperSlide className='bg-yellow-300 flex items-center min-h-[100vh]'>
            <img  src={productlist[6].image} className='h-72 object-contain' />
              </SwiperSlide> 
          </Swiper>
        </div>
      );
}

export default HeroSlider
        


