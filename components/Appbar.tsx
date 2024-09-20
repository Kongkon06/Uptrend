'use client';
import { User } from "lucide-react";
import DrawerNavigation from "./Sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import  Logo2 from "@/components/assets/Logo2.png"
import  Logo1 from "@/components/assets/Logo 1.png"
import Image from "next/image";
export function Appbar() {

  const router = useRouter();
  const [Open,isOpen] = useState(false);
  return (
    <div className="h-20 flex justify-between bg-slate-900 px-8">
      <div className="gap-4 h-full text-5xl font-dm-sans text-white font-semibold flex items-center">
        <Image className="w-20 object-contain" src={Logo2} alt=""/>
      </div>
      <div
        className={
          "flex gap-5 items-center sm:text-xl text-white max-sm:hidden max-[320px]:text-xl"
        }
      >
        <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
          <span className="absolute inset-0 w-full h-full rounded-full transition duration-700 ease-out transform translate-x-1 translate-y-1 bg-slate-200 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full rounded-full border border-indigo-600 bg-slate-900"></span>
          <span className="relative text-slate-100 ">Trending</span>
        </button>
        <button onClick={() => router.push('/Category')} className="relative inline-block font-medium group py-1.5 px-2.5 ">
        <span className="absolute inset-0 w-full h-full rounded-full transition duration-700 ease-out transform translate-x-1 translate-y-1 bg-slate-200 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full rounded-full border border-indigo-600 bg-slate-900"></span>
          <span className="relative text-slate-100 ">All Products</span>
        </button>
        <DropdownMenu>
      <DropdownMenuTrigger>
      <div className="  flex-col relative inline-block font-medium group py-1.5 px-2.5 ">
          <span className="absolute inset-0 w-full h-full rounded-full transition duration-700 ease-out transform translate-x-1 translate-y-1 bg-slate-200 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full rounded-full border border-indigo-600 bg-slate-900"></span>
          <span className="relative text-slate-100 "><User /></span>
        </div>
      </DropdownMenuTrigger>
        <DropdownMenuContent className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenuItem className="DropdownMenuItem">
            <div role="button" onClick={()=>router.push("/Auth")}>Sigin</div>
          </DropdownMenuItem>
          <DropdownMenuItem className="DropdownMenuItem">
          <div>Profile</div>
          </DropdownMenuItem>
          <DropdownMenuItem className="DropdownMenuItem">
          <div role="button" onClick={()=>router.push("/Cart")}>Cart</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="sm:hidden flex items-center">
        <DrawerNavigation />
      </div>
        </div>
  );
};