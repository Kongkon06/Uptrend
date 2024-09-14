import { Details } from "./Details";

export function CategoryCard(){
    return <div className="h-full rounded-lg w-auto flex shadow-xl shadow-slate-300">
            <img  src="https://i.pinimg.com/originals/69/20/f2/6920f212a7d4868e7263baacfaaa5649.jpg" className="w-1/2 rounded-l-lg aspect-16/9"></img>
            <Details/>
    </div>
}