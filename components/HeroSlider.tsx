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
            <img  src="https://img.freepik.com/free-photo/young-trendy-woman-model-outside-street_1303-22127.jpg?t=st=1727026758~exp=1727030358~hmac=0c2382364c02feffe70765bba24803d8625e414e819a2486b52fe2c7f8347615&w=996" className='object-cover' />
            </SwiperSlide>
            <SwiperSlide className='h-[50vh] bg-green-300'>
            <img  src="https://img.freepik.com/free-photo/sporty-man-resting-after-training_23-2147755370.jpg?t=st=1727026434~exp=1727030034~hmac=dbc7ac051db0b7ff07d0f8b0913b46be9012b8fec3801d6d5606f56c93c89806&w=996" className='object-cover' />
            </SwiperSlide>
          </Swiper>
        </div>
      );
}

export default HeroSlider
        


