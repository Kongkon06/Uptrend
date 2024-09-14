import { Appbar } from "@/components/Appbar"
import { Card } from "@/components/Card"
export default function Home(){
    return <div>
    <Appbar/>
    <div className='h-full p-3 grid grid-cols-4 grid-rows-2 gap-2'>
     <div className="row-span-2 col-span-2 bg-slate-900"></div>
     <div className="row-span-1"><Card/></div>
     <div className="h-64"><Card/></div>
     <div className="h-64"><Card/></div>
     <div className="h-64"><Card/></div>
    </div>
    <div className=" my-2 h-full p- grid grid-cols-4 gap-2">
        <div className="h-20 col-span-4 flex justify-center items-center text-3xl font-semibold font-dm-sans">Trending</div>
    </div>
    <div className="h-screen p-3"><Card/></div>
  </div>
}