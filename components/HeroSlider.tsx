"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';  
import { Pagination, Autoplay } from 'swiper/modules';

const HeroSlider = () => {
    return (
        <div className='h-[50vh] '>
          <Swiper 
            direction={'vertical'} 
            loop= {true}
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
                    What
                </span>
            </SwiperSlide>
            <SwiperSlide className='bg-red-300 min-h-[100vh]'>Photo 2</SwiperSlide>
            <SwiperSlide className='bg-blue-300 min-h-[100vh]'>Photo 3</SwiperSlide>
            <SwiperSlide className='bg-green-300 min-h-[100vh]'>Photo 4</SwiperSlide>
            <SwiperSlide className='bg-yellow-300 min-h-[100vh]'>Photo 5</SwiperSlide> 
          </Swiper>
        </div>
      );
}

export default HeroSlider
