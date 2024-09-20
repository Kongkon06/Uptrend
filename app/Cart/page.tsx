'use client'
import { Appbar } from "@/components/Appbar";
import { useRecoilValue } from "recoil";
import { Cartatom } from "../Atoms";

export default function Cart(){
    const cartProducts = useRecoilValue(Cartatom);
    return <div>
        <Appbar/>
        <div className="w-2/5 h-auto p-4">
            <div className="w-auto h-auto flex justify-between text-lg p-4 shadow-xl">
                <div>Address</div>
                <button className="border-none text-blue">Change</button>
            </div>
        <div className=" mt-7 w-full shadow-xl">
   Hi
        </div>
        </div>
    </div>
}