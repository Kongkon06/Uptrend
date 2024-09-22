'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper/types';  // Import Swiper types
import { initialProducts } from '@/app/asset';

const TreddingCard = () => {
  const productlist = initialProducts;

  const swiperRef = useRef<SwiperCore | null>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();  // Start auto-scroll when hovering
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();  // Stop auto-scroll when leaving
    }
  };

  return (
    <div
      className="container mx-auto p-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
     <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={5}          
        spaceBetween={20}       
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,              
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="swiper-container"
      > <SwiperSlide key={productlist[6].id}>
      <div className="flex justify-center">
        <div className="max-w-xs h-95 rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"> {/* Fixed height */}
          <img
            className="w-full h-64 object-cover"   
            src={productlist[6].image}
            alt={productlist[6].name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{productlist[6].name.slice()}</div>
            <p className="text-gray-700 text-base">{productlist[6].price}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
          <SwiperSlide key={productlist[7].id}>
            <div className="flex justify-center">
              <div className="max-w-xs h-95 rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                <img
                  className="w-full h-64 object-cover"   
                  src={productlist[7].image}
                  alt={productlist[7].name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{productlist[7].name}</div>
                  <p className="text-gray-700 text-base">{productlist[7].price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={productlist[8].id}>
            <div className="flex justify-center">
              <div className="max-w-xs h-95 rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"> 
                <img
                  className="w-full h-64 object-cover"   
                  src={productlist[8].image}
                  alt={productlist[8].name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{productlist[8].name}</div>
                  <p className="text-gray-700 text-base">{productlist[8].price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={productlist[9].id}>
            <div className="flex justify-center">
              <div className="max-w-xs h-95 rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"> 
                <img
                  className="w-full h-64 object-cover"   
                  src={productlist[9].image}
                  alt={productlist[9].name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{productlist[9].name}</div>
                  <p className="text-gray-700 text-base">{productlist[9].price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={productlist[10].id}>
            <div className="flex justify-center">
              <div className="max-w-xs h-95 rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"> 
                <img
                  className="w-full h-64 object-cover"   
                  src={productlist[10].image}
                  alt={productlist[10].name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{productlist[10].name.slice(0,30)}</div>
                  <p className="text-gray-700 text-base">{productlist[10].price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={productlist[11].id}>
            <div className="flex justify-center">
              <div className="max-w-xs h-95 rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"> 
                <img
                  className="w-full h-64 object-cover"   
                  src={productlist[11].image}
                  alt={productlist[11].name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{productlist[11].name.slice(0,30)}</div>
                  <p className="text-gray-700 text-base">{productlist[11].price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={productlist[12].id}>
            <div className="flex justify-center">
              <div className="max-w-xs h-95 rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"> 
                <img
                  className="w-full h-64 object-cover"   
                  src={productlist[12].image}
                  alt={productlist[12].name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{productlist[12].name.slice(0,30)}</div>
                  <p className="text-gray-700 text-base">{productlist[12].price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={productlist[13].id}>
            <div className="flex justify-center">
              <div className="max-w-xs h-95 rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"> 
                <img
                  className="w-full h-64 object-cover"   
                  src={productlist[13].image}
                  alt={productlist[13].name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{productlist[13].name.slice(0,30)}</div>
                  <p className="text-gray-700 text-base">{productlist[13].price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TreddingCard;
