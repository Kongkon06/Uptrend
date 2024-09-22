'use client'
import { Appbar } from "@/components/Appbar";
import { useRecoilState } from "recoil";
import { Cartatom } from "../Atoms";
import { Cartcard } from "@/components/Cartcard";
export default function Cart(){
    const [cartProducts,setCart] = useRecoilState(Cartatom);
    const totalPrice = cartProducts.map((prod) => prod.price).reduce((acc, price) => acc + price, 0);
    function del(id:number){
 setCart(prevTodos => prevTodos.filter(todo => todo.id !== id));
}
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="w-2/5 h-auto px-4">
            <div className="w-auto h-auto flex py-4 px-2 justify-between items-center text-lg shadow-xl">
                <div>Address
                    <div className="mt-3 font-medium text-slate-600">
                        Dibrugarh,Assam,koribat asu kela bal...
                    </div>
                </div>
                <button onClick={()=>{alert("kaam nokore")}} className="border-none text-indigo-700">Change</button>
            </div>
        <div className=" mt-7 w-full h-auto shadow-xl">
        {cartProducts.map((product)=>(<div className="mb-5 h-28 pr-4">
            <Cartcard product={product} fn={()=>{del(product.id)}}/>
        </div>))}
        </div>
        </div>
        <div className="shadow-xl text-lg mr-10 w-72 h-72">
        <div className="text-slate-900 font-semibold text-lg mb-3">Price details</div>
        <div className="flex justify-between">Price <span className="text-green-500">{totalPrice}</span></div>
        <div className="flex justify-between">Discount <span className="text-green-500">0.00</span></div>
        <div className="flex justify-between">Delivery charges <span className="text-green-500">0.00</span></div>
        <div className="flex my-2 justify-between">Total Price <span className="text-green-500 font-semibold">{totalPrice}</span></div>
        </div>
        </div>
    </div>
}