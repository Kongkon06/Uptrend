'use client';

import React, {useState} from 'react';

import { Appbar } from "@/components/Appbar";
import { Card } from "@/components/Card";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import { initialProducts } from './asset';
import { DM_Sans } from '@next/font/google';
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight:'400'
});
export default function Home() {
  const [isloggedin, setIsLoggedIn] = useState<boolean>(false); //changes
  const product = initialProducts;
  const logger = (isloggedin: boolean) => {       //changes
    setIsLoggedIn(isloggedin);
  }
  return (
    <div className={dm_sans.className}>
      <Appbar />
      <div className="h-full p-3 grid grid-cols-4 grid-rows-2 gap-2">
        <div className="row-span-2 col-span-2 overflow-hidden rounded-2xl">
          <HeroSlider />
        </div>
        <div className=" h-64 rounded-r-2xl">
          <Card product={product[0].image} />
        </div>
        <div className="h-64 rounded-r-2xl">
          <Card product={product[1].image} />
        </div>
        <div className="h-64 rounded-r-2xl">
          <Card product={product[2].image}/>
        </div>
        <div className="h-64 rounded-r-2xl">
          <Card product={product[3].image}/>
        </div>
      </div>
      <div className=" my-2 h-full p-3 gap-2">
        <div className="h-20 col-span-4 flex justify-center items-center text-3xl font-semibold font-dm-sans">Trending</div>
    </div>
    <div className="h-96 p-3"><Card product={product[0].image}/></div>
    <div className=" my-2 h-full p- grid grid-cols-4 gap-2">
        <div className="h-20 col-span-4 flex justify-center items-center text-3xl font-semibold font-dm-sans">Featured</div>
    </div>
    <div className='h-full p-3 grid grid-cols-3 grid-rows-1 gap-2'>
     <div className="row-span-1"><Card product={product[0].image}/></div>
     <div className="row-span-1"><Card product={product[3].image}/></div>
     <div className="row-span-1"><Card product={product[2].image}/></div>
    </div>
    <div> 
    <div className='flex mt-28 gap-1'><img src='https://img.freepik.com/free-vector/abstract-fashion-monsoon-sale-banner-offer-discount-business-background-free-vector_1340-22460.jpg?ga=GA1.1.1733476315.1719984428&semt=ais_hybrid' className='w-2/3'></img><img src='https://img.freepik.com/premium-photo/fashion-sales-template-design_639785-87243.jpg?ga=GA1.1.1733476315.1719984428&semt=ais_hybrid'></img></div>
    </div>

    <div className=" my-2 h-full p- grid grid-cols-4 gap-2">
        <div className="h-20 col-span-4 flex justify-center items-center text-3xl font-semibold font-dm-sans">BestSellers</div>
    </div>
    <div className="h-full p-3 grid grid-cols-4 grid-rows-1 gap-1">
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src="https://littleboxindia.com/cdn/shop/files/2558e9c684f6046a7abfb1d94fe6076f_460x.jpg?v=1721482322" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">Scoop Neck Retro Style Midi Dress In Off-White</div>
        <p className="text-gray-700 text-base">Rs 1299</p>
    </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src="https://littleboxindia.com/cdn/shop/files/3630298a04befd59af2352a8947691c2_460x.jpg?v=1723903274" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">Cowl Neck Solid Ruffle Hem Ruched Maxi Dress In Pink</div>
        <p className="text-gray-700 text-base">Rs 1099</p>
    </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src="https://littleboxindia.com/cdn/shop/files/367c477d4d62e1cb56412edeb6fe887b_460x.jpg?v=1718453316" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">V Neck Front Knot Floral Print Flare Long Sleeve Top</div>
        <p className="text-gray-700 text-base">Rs 799</p>
    </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src="https://littleboxindia.com/cdn/shop/files/f1d4802c9c39391020211dc1fb328304_460x.jpg?v=1719493846" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">Tie Shoulder Layered Ruched Cami Dress In Pink</div>
        <p className="text-gray-700 text-base">Rs 899</p>
    </div>
    </div>
</div>
<div>

</div>
<div className="h-full p-8">
<Footer/>
</div>
  </div>

    //</div>
  );
}