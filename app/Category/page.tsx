import { Card } from "@/components/Card";
import { Tagline } from "@/components/Tagline";

export default function(){
    return <div>
        <Tagline/>
        <div className="flex">
            <div className="h-screen w-44 bg-slate-700"></div>
            <div className="h-full w-full">
                <div className="p-3 grid grid-cols-4 grid-rows-2 gap-2">
                    <div className="h-64">
                            <Card/>
                    </div>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    </div>
}