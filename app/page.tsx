'use client';

import React from 'react';

import { Appbar } from "@/components/Appbar";
import { Card } from "@/components/Card";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import { initialProducts } from './asset';
import { DM_Sans } from '@next/font/google';
import TreddingCard from '@/components/TreddingCard';
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight:'400'
});
export default function Home() {
  const product = initialProducts;
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
    <TreddingCard/>

    <div className=" my-2 h-full p- grid grid-cols-4 gap-2">
        <div className="h-20 col-span-4 flex justify-center items-center text-3xl font-semibold font-dm-sans">Featured</div>
    </div>
    <div className='h-full p-3 grid grid-cols-3 grid-rows-1 gap-2'>
     <div className="row-span-1"><Card product={product[2].image}/></div>
     <div className="row-span-1"><Card product={product[8].image}/></div>
     <div className="row-span-1"><Card product={product[10].image}/></div>
    </div>

    <div className='h-16 mt-20 text-balance'>
  <p className='font-serif  font-light text-center justify-center'>"Created these clothes for those people who are here to conquer. If this were a 1,000 years ago, we made these for the men who would come on horses and burn armies alone. In today's world, they change, work and push limits to become Extarordinary."
</p>
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
    <img src="https://sukajanshop.com/wp-content/uploads/2022/11/31671332-1-510x510.jpg?v=1669564760" alt="Description of the image" className="object-cover w-full h-72" />
    <div className="px-6 py-4">
      <div className="font-medium text-lg mb-2">Mythical Embroidery Crane Birds Fruits Retro Jacket</div>
      <p className="text-gray-700 text-base">Rs 2599</p>
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
    <div className='container h-full mt-28 '>
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

    <div className=" mt-16">
        <div className="h-20  flex justify-center items-center text-4xl font-semibold font-dm-sans">Join the Fashion Community</div>
    </div>
    <div className=' h-96 grid grid-cols-7 row-span-2'>
      <img src='https://overlaysnow.com/cdn/shop/files/DSC00946copy.jpg?' className='h-64 w-64 ml-5'></img>
      <img src='https://scontent.cdninstagram.com/v/t51.75761-15/462995520_18019883765539604_2671749387331323518_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=1dSJC1HJiCUQ7kNvgGSwGM0&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=A154nxCyNra1qgWZxosm6bi&oh=00_AYDSaJleNjljX1C2pr2PsDSVkVKlzAeN25EfqLm1xPiZKQ&oe=6714AC16' className='h-64 w-64'></img>
      <img src='https://scontent.cdninstagram.com/v/t51.75761-15/463002571_18019883864539604_7369864743317494173_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=TJAglpNWbJwQ7kNvgGnrsFq&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=A154nxCyNra1qgWZxosm6bi&oh=00_AYC4z470wieFZFpaUUbbNe3Uq7VESsjTwWoh5_qvXuDdlQ&oe=6714A119' className='h-64 w-64'></img>
      <img src='https://scontent.cdninstagram.com/v/t51.75761-15/462737314_18019758020539604_4480191675711602458_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=dLi5c7SMi0IQ7kNvgFqWRH7&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=A154nxCyNra1qgWZxosm6bi&oh=00_AYBWTbmFV7LzBCdvKNbXKGZF8CtH7jE45vARxi2lnqJLsw&oe=67149ECA' className='h-64 w-64'></img>
      <img src='https://scontent.cdninstagram.com/v/t39.30808-6/462762237_18019625231539604_5316332688181696449_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=xlcIUHeM5e4Q7kNvgEbdbF0&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ASbzwqEekIxtt_RL5uIKgg4&oh=00_AYCEKBxdHn1dm8_MR3Mk9_3oCLKhgyBXypY4uClIoN3h6g&oe=67149C4B' className='h-64 w-64'></img>
      <img src='https://scontent.cdninstagram.com/v/t51.75761-15/462751262_18019757834539604_3975030153953601783_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=baEcYqqYSR0Q7kNvgHSpmBc&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ASbzwqEekIxtt_RL5uIKgg4&oh=00_AYAbvpXzeLU7EYSe3aeCZYiuI0BBt88XzhcuWrdU39FBAw&oe=6714B7F8'className='h-64 w-64'></img>
      <img src='https://scontent.cdninstagram.com/v/t51.75761-15/462733081_18019757684539604_1703120573152482497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=jvHBia9CHBoQ7kNvgFzOcpV&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=A154nxCyNra1qgWZxosm6bi&oh=00_AYCCaQIG2wutyXGgY86P9Dfd8Rh_3zStuRHbYzA-TPA7gQ&oe=67148AC4' className='h-64 w-64 '></img>
      <img src='https://overlaysnow.com/cdn/shop/products/DSC01778.jpg' className='h-64 w-64 ml-5'></img>
      <img src='https://overlaysnow.com/cdn/shop/files/IMG_1201.jpg?v=1720971631&width=800'  className='h-64 w-96'></img>
      <img src='https://overlaysnow.com/cdn/shop/files/2_f33afa98-e96c-4883-8022-96d1e66f9899.jpg' className='h-64'></img>
      <img src='https://overlaysnow.com/cdn/shop/files/2_401d5773-baa3-4f97-a694-cfad570243e4.jpg' className='h-64 w-64'></img>
      <img src='https://overlaysnow.com/cdn/shop/files/2_6386bd76-e742-4678-a81d-b4dfe95b144c.jpg' className='h-64'></img>
      <img src='https://overlaysnow.com/cdn/shop/files/DSC00946copy.jpg?'className='h-64'></img>
      <img src='https://overlaysnow.com/cdn/shop/files/GreywildPhoto_4.jpg' className='h-64 w-64 '></img>
    </div>

<div className="h-full flex justify-center p-8">
<Footer/>
<a href='#Appbar' className='back-top-btn active' aria-label='back to top' data-back-top-btn='true'></a>
</div>
  </div>
  );
}