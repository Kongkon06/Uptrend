import { Appbar } from "@/components/Appbar";

export default function (){
    return<div >
    <Appbar />
    <div className="h-screen flex font-dm-sans ">
        <div className="h-full w-56 font-dm-sans pl-5 font-semibold flex flex-col text-xl bg-blue-700">
            <div>
                Filter
            </div>
            <div>
                Casual
            </div>
            <div>Summer wear</div>
        </div>
        <div className="w-full p-3 grid grid-cols-5 gap-2">
            <div className="col-span-3">
                <div className=" flex justify-center">
                    <img
                        className="shadow-xl h-auto w-4/6 aspect-5/7"
                        src="https://i.pinimg.com/originals/69/20/f2/6920f212a7d4868e7263baacfaaa5649.jpg"
                        alt="description of image"
                    />

                </div>
            </div>
            <div className="col-span-2">
                <div className="mt-4 text-3xl font-semibold">
                    Prodect Name
                </div>
                <div className="mt-4 text-xl font-light">
                    Price
                </div>
                <div className="mt-4 text-lg text-slate-400">
                    Desccription
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
                        <div className="px-4 border-4 mr-2 bg-slate-200">S</div>
                        <div className="px-4 border-4 mr-2 bg-slate-200">M</div>
                        <div className=" px-4 border-4 mr-2 bg-slate-200">L</div>
                        <div className="px-4 border-4mr-2 bg-slate-200">XL</div></div>
                </div>
                <div className="mt-7 text-2xl ">
                    <div>Quantity</div>
                    <div className="mt-2 flex flex-between items-center border-x-2">
                        <div className=" h-6 w-6 items-center border-2">+</div>
                        <div>1</div>
                        <div className=" h-6 w-6 items-center border-2">-</div>
                    </div>
                </div>
                <div className="mt-7 text-2xl ">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
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
                <div className="mt-10 w-auto p-2text-2xl flex flex-col">
                    <div className="border-b-2 border-slate-300 py-3 mr-2 ">Description</div>
                    <div className="py-3 border-b-2 border-slate-300 mr-2 ">Subscription</div>
                    <div className=" py-3 border-b-2 border-slate-300 mr-2 ">Shoping and Returns</div>
                    <div className="py-3 border-b-2 border-slate-300 mr-2 ">Details</div></div>
            </div>
        </div>
    </div>
</div>
}