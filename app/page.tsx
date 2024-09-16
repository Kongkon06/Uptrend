'use client';

import {useState} from 'react';

import { Appbar } from "@/components/Appbar";
import { Card } from "@/components/Card";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  const [isloggedin, setIsLoggedIn] = useState(true);

  const logger = () => {
    setIsLoggedIn(false);
  }
  return (
    <div>
      <Appbar/>
      <div className="h-full p-3 grid grid-cols-4 grid-rows-2 gap-2">
        <div className="row-span-2 col-span-2 overflow-hidden rounded-2xl">
          <HeroSlider />
        </div>
        <div className=" h-64 rounded-r-2xl">
          <Card />
        </div>
        <div className="h-64 rounded-r-2xl">
          <Card />
        </div>
        <div className="h-64 rounded-r-2xl">
          <Card />
        </div>
        <div className="h-64 rounded-r-2xl">
          <Card />
        </div>
      </div>
      <div className=" my-2 h-full grid grid-cols-4 gap-2">
        <div className="h-20 col-span-4 flex justify-center items-center text-3xl font-semibold font-dm-sans">
          Trending
        </div>
      </div>
      <div className="h-screen p-3">
        <Card />
      </div>
    </div>
  );
}
