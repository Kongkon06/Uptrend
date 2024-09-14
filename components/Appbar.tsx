import { useRouter } from "next/navigation";
import DrawerNavigation from "./Sidebar";

export function Appbar(){

    return <div className='h-28 flex justify-between font-dm-sans bg-slate-900'>
        <div className="ml-4 h-full text-5xl text-white font-semibold flex items-center">
            Hoodie
        </div>
        <div className=" w-2/6 flex justify-between items-center text-3xl text-white">
            <div role="button" >Men</div>
            <div role="button" >Women</div>
            <div role="button" >Trending</div>
            <DrawerNavigation/>
        </div>
    </div>
}