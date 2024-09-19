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

export function Appbar() {

  const router = useRouter();

  return (
    <div className="h-20 flex justify-between font-dm-sans bg-slate-700 px-8">
      <div className="gap-4 h-full text-5xl text-white font-semibold flex items-center">
        Hoodie
      </div>
      <div
        className={
          "flex gap-5 items-center sm:text-xl text-white max-sm:hidden max-[320px]:text-xl"
        }
      >
        <button className="relative inline-block font-medium group py-1.5 px-2.5">
          <span className="absolute inset-0 w-full h-full transition duration-700 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
          <span className="relative text-slate-600 ">Men</span>
        </button>
        <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
          <span className="absolute inset-0 w-full h-full transition duration-700 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-slate-600 group-hover:bg-indigo-50"></span>
          <span className="relative text-slate-600 ">Women</span>
        </button>
        <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
          <span className="absolute inset-0 w-full h-full transition duration-700 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
          <span className="relative text-slate-600 ">Trending</span>
        </button>
        <button onClick={()=>router.push('/Category')} className="relative inline-block font-medium group py-1.5 px-2.5 ">
          <span className="absolute inset-0 w-full h-full transition duration-700 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
          <span className="relative text-slate-600 ">All Products</span>
        </button>
      </div>
      <div className="sm:hidden flex items-center">
        <DrawerNavigation />
      </div>
    </div>
  );
}