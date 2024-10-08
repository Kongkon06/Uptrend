'use client'
import { Appbar } from "@/components/Appbar";
import { Suggestion } from "@/components/Similiar";
import { initialProducts } from "@/app/asset"; 
import { useRecoilState } from "recoil";
import { Cartatom } from "@/app/Atoms";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ({ params }: { params: { id: string } }){
    const product = initialProducts
    const id= params.id;
    const [productlist,setproduct] = useRecoilState(Cartatom);
    const index= Number(id)-1;
    const [quantity,setquantity] = useState(1);
    return<div >
    <Appbar />
    <div className="h-100% flex font-dm-sans ">
        <div className="w-full"><div className="w-full p-3 grid grid-cols-5 gap-2">
            <div className="col-span-3 flex justify-center">
                <div className=" flex w-[45vw]  p-4 justify-center">
                    <img
                        className="shadow-xl max-h-[45vw] object-contain"
                        src={product[index].image}
                        alt="description of image"
                    />

                </div>
            </div>
            <div className="col-span-2">
                <div className="mt-4 text-3xl font-semibold">
                    {product[index].name}
                </div>
                <div className="mt-4 text-xl font-light">
                    {product[index].price}
                </div>
                <div className="mt-4 text-lg text-slate-400">
                    {product[index].description}
                </div>
                <div className="mt-7 text-2xl ">
                    <div>Select color</div>
                    <div className="flex">
                        <div className="rounded-full h-6 w-6 border-2 bg-red-700"></div>
                        <div className="rounded-full h-6 w-6 border-2 bg-blue-700"></div></div>
                </div>
                <div className="mt-7 text-2xl ">
                    <div>Select Size</div>
                    <div className="mt-2 flex">
                    <button className="px-4 border-2 border-white mr-2 bg-slate-200 hover:border-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-700 dark:focus:slate-700">S</button>
                        <button className="px-4 border-2 border-white mr-2 bg-slate-200 hover:border-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-700 dark:focus:slate-700">M</button>
                        <button className="px-4 border-2 border-white mr-2 bg-slate-200 hover:border-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-700 dark:focus:slate-700">L</button>
                        <button className="px-4 border-2 border-white mr-2 bg-slate-200 hover:border-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-700 dark:focus:slate-700">XL</button></div>
                </div>
                <div className="mt-7 text-2xl ">
                    <div>Quantity</div>
                    <div className="mt-2 w-20 flex justify-between items-center border-black border-y-2">
                        <div role="button" onClick={()=>setquantity(quantity+1)} className=" h-6 w-6 flex items-center ">+</div>
                        <div>{quantity}</div>
                        <div role="button" onClick={()=>{if(quantity>=1)setquantity(quantity+1)}} className=" h-6 w-6 pl-2 flex items-center ">-</div>
                    </div>
                </div>
                <div className="mt-7 text-2xl ">
                    <button onClick={()=>{setproduct([...productlist,product[index]])}} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Add to cart
                        </span>
                    </button>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Buy now
                        </span>
                    </button>
                </div>
                <div className="mt-10 w-auto p-2 text-2xl flex flex-col">
                    <div className="flex justify-between border-b-2 border-slate-300 py-3 mr-2 "><div className=" ">Description</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                    <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                    </div>
                    <div className="flex justify-between border-b-2 border-slate-300 py-3 mr-2"><div className=" ">Shopping and returns</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                    <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                    </div>
                    <div className="flex justify-between border-b-2 border-slate-300 py-3 mr-2"><div className=" ">Details</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                    <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                    </div>
                    </div>
            </div>
        </div>
        <div className="text">
            <p className="font-bold text-3xl text-center mt-20 ">You may also like</p>
        </div>
        <div className="mt-12">
        <Suggestion/>
        </div>
        </div>

 
        
    </div>
    <div className="h-full flex justify-center p-8">
<Footer/>
</div>
</div>
}