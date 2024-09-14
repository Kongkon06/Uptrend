import { CategoryCard } from "@/components/CategoryCard";
import { Tagline } from "@/components/Tagline";

export default function(){
    return <div>
        <Tagline/>
        <div className="flex">
            <div className="h-screen w-44 bg-slate-700"></div>
            <div className="h-full w-full">
                <div className="p-3 w-full grid grid-cols-3 gap-2">
                    <div>
                        <CategoryCard/>
                        </div>
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                        <CategoryCard/>
                </div>
            </div>
        </div>
    </div>
}