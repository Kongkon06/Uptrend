'use client'
import { Appbar } from "@/components/Appbar";
import { useRecoilValue } from "recoil";
import { Cartatom } from "../Atoms";
import CategoryCard from "@/components/CategoryCard";

export default function Cart(){
    const cartProducts = useRecoilValue(Cartatom);
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="w-2/5 h-auto px-4">
            <div className="w-auto h-auto flex pt-4justify-between text-lg shadow-xl">
                <div>Address</div>
                <button className="border-none text-blue">Change</button>
            </div>
        <div className=" mt-7 w-full h-full shadow-xl">
        {cartProducts.map((product)=>(<div className="mb-2">
            <CategoryCard product={product}/>
        </div>))}
        </div>
        </div>
        <div className="shadow-xl text-lg mr-10 w-72 h-72">
        <div className="text-slate-900 font-semibold text-lg mb-3">Price details</div>
        <div className="flex justify-between">Price <span>200</span></div>
        <div className="flex justify-between">Discount <span>200</span></div>
        <div className="flex justify-between">Delivery charges <span>200</span></div>
        <div className="flex my-2 justify-between">Price <span>200</span></div>
        </div>
        </div>
    </div>
}