import { ProductProps } from "@/app/Category/page";

export function Details({product}: {product: ProductProps}){
    return <div className=" flex justify p-4 text-2xl font-dm-sans">
    <div className=" flex flex-col">
    <div className="mb-3 text-slate-500 text-sm">{product.name}</div>
    <div className="mb-3 text-slate-500 text-sm">{product.brand}</div>
    <div className="font-light text-slate-700 mb-2">{product.price}</div>
    <div className="font-medium text-slate-900">{product.category}</div>
    <div className="mt-3">
        <div className="text-slate-500 text-sm">{product.description}</div>
    </div>
    <div className="mt-4 text-sm">
        <div className="rounded-xl w-16 px-3 py-1 bg-green-600">
            #Tags
        </div>
    </div>
    <div></div>
    </div>
</div>
}