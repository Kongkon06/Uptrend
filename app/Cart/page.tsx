import { Appbar } from "@/components/Appbar";

export default function Cart(){
    return <div>
        <Appbar/>
        <div className="w-2/5 h-auto">
            <div className="w-auto h-auto flex justify-between text-lg ml-4 p-4 shadow-xl">
                <div>Address</div>
                <button className="border-none text-blue">Change</button>
            </div>

        </div>
    </div>
}