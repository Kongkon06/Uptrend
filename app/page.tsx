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
          <Card product={product[11].image} />
        </div>
        <div className="h-64 rounded-r-2xl">
          <Card product={product[12].image}/>
        </div>
        <div className="h-64 rounded-r-2xl">
          <Card product={product[8].image}/>
        </div>
      </div>

      <div className=" my-2 h-full p-3 gap-2">
        <div className="h-20 col-span-4 flex justify-center items-center text-3xl font-semibold font-dm-sans">Trending</div>
    </div>
    <div className='h-full p-3 flex justify-center gap-6'>
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src="https://i.pinimg.com/564x/64/1a/8a/641a8a9050688e48bc77943a2ead4224.jpg" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">Golden Embroidered Sukajan Jacket</div>
        <p className="text-gray-700 text-base">Rs 799</p>
    </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src="https://overlaysnow.com/cdn/shop/files/Image-Edit-_10.jpg" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">Deconstructed Fawn Joggers</div>
        <p className="text-gray-700 text-base">Rs 1699</p>
    </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src="https://i.pinimg.com/564x/fa/f3/9e/faf39ecc2eed11e06285724adb99f612.jpg" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">Vintage Sukajan Jacket</div>
        <p className="text-gray-700 text-base">Rs 899</p>
    </div>
     </div>
     <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src="https://overlaysnow.com/cdn/shop/products/DSC00514.jpg?" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">Off-Grid Polo Tshirt - Blue</div>
        <p className="text-gray-700 text-base">Rs 899</p>
    </div>
     </div>
     <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src="https://overlaysnow.com/cdn/shop/files/AriseSleeveless_3.jpg" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">Arise Heavy Weight Sleeveless Tank Top </div>
        <p className="text-gray-700 text-base">Rs 1299</p>
    </div>
     </div>
    </div>
    

    <div className=" my-2 h-full p- grid grid-cols-4 gap-2">
        <div className="h-20 col-span-4 flex justify-center items-center text-3xl font-semibold font-dm-sans">Featured</div>
    </div>
    <div className='h-full p-3 grid grid-cols-3 grid-rows-1 gap-2'>
     <div className="row-span-1"><Card product={product[2].image}/></div>
     <div className="row-span-1"><Card product={product[8].image}/></div>
     <div className="row-span-1"><Card product={product[10].image}/></div>
    </div>

    <div className="my-2 h-full p-3 grid grid-cols-4 gap-2">
  <div className="h-20 col-span-4 flex justify-center items-center text-3xl font-semibold font-dm-sans">BestSellers</div>
</div>

<div className="h-full p-3 grid grid-cols-4 gap-2 place-items-center">
  <div className="w-full max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
    <img src="https://i.pinimg.com/564x/88/68/5f/88685ff42bc232465447b4411eb913b7.jpg" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
      <div className="font-medium text-lg mb-2">STAR NASA Thick Aviator Jacket</div>
      <p className="text-gray-700 text-base">Rs 1299</p>
    </div>
  </div>
  
  <div className="w-full max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
    <img src="https://i.pinimg.com/564x/ed/96/d5/ed96d59392b19254a158d3b659f44372.jpg" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
      <div className="font-medium text-lg mb-2">Autumn Embroidered Jacket Dragon Sukajan Jacket</div>
      <p className="text-gray-700 text-base">Rs 1099</p>
    </div>
  </div>
  
  <div className="w-full max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
    <img src="https://i.pinimg.com/564x/64/1a/8a/641a8a9050688e48bc77943a2ead4224.jpg" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
      <div className="font-medium text-lg mb-2">Golden Embroidered Sukajan Jacket</div>
      <p className="text-gray-700 text-base">Rs 799</p>
    </div>
  </div>
  
  <div className="w-full max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
    <img src="https://i.pinimg.com/564x/fa/f3/9e/faf39ecc2eed11e06285724adb99f612.jpg" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
      <div className="font-medium text-lg mb-2">Vintage Sukajan Jacket</div>
      <p className="text-gray-700 text-base">Rs 899</p>
    </div>
  </div>
</div>


    <div> 
    <div className='flex mt-28 gap-1'><img src='https://img.freepik.com/premium-vector/new-collection-sale-banner-design_105164-276.jpg?ga=GA1.1.1733476315.1719984428&semt=ais_hybrid' className='w-2/3'></img><img src='https://img.freepik.com/premium-photo/fashion-sales-template-design_639785-87243.jpg?ga=GA1.1.1733476315.1719984428&semt=ais_hybrid'></img></div>
    </div>

    <div className='flex justify-center'>
    <div className='container h-full mt-32 '>
<h2 className='font-extrabold text-5xl text-center'>Why Shop with Uptrend ?</h2>
<div className='flex justify-center'>
<ul className='list w-4/5 flex justify-between mt-28 '>
  <li className='item'>
    <div className='item-glassmorphism'>
      <img src='//overlaysnow.com/cdn/shop/files/New_Project_from_Photopea_3_100x.jpg?v=1726934197' className='ml-10'></img>
      <h3 className='item-title'>Made with Premium Cotton</h3>
    </div>
  </li>
  <li className='item'>
  <div className='item-glassmorphism'>
      <img src='//overlaysnow.com/cdn/shop/files/Fast_Delivery_Icon_3db1c35d-cdd9-462a-8841-6809aab6ec28_100x.jpg?v=1726933523' className='ml-6'></img>
      <h3 className='item-title ml-6'>Fast & Free Delivery</h3>
    </div>
  </li>
  <li className='item'>
  <div className='item-glassmorphism'>
      <img src='//overlaysnow.com/cdn/shop/files/Juicy_Fish_Icon_249f83b9-20d6-4d43-86d7-8add1fb34918_100x.jpg?v=1726933683' className='ml-4'></img>
      <h3 className='item-title mt-1'>Secure CheckOut</h3>
    </div>
  </li>
  <li className='item'>
  <div className='item-glassmorphism'>
      <img src='//overlaysnow.com/cdn/shop/files/Screenshot_2024-09-21_at_9.14.25_PM_100x.png?v=1726933472' className='ml-2'></img>
      <h3 className='item-title mt-1'>7-day Return Policy</h3>
    </div>
  </li>
</ul>
</div>
</div>
    </div>
<div className="h-full flex justify-center p-8">
<Footer/>
</div>
  </div>
  );
}