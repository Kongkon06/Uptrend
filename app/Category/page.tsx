'use client';

import CategoryCard from '@/components/CategoryCard';
import { Tagline } from '@/components/Tagline';
import { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider'; 
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Appbar } from '@/components/Appbar';

import { initialProducts } from '@/app/asset';
import Link from 'next/link';

// Define the product type
export type ProductProps = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  brand: string;
};

export default function Category() {
  const products= initialProducts; // Explicit type
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortBy, setSortBy] = useState<string>('name');

  const handleCategoryChange = (category: string) => {
    setCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange([value[0], value[1]]);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  // Filter and sort products using useMemo for optimization
  const filteredProducts = useMemo(() => {
    const result = initialProducts.filter(
      (product: ProductProps) =>
        (categories.length === 0 || categories.includes(product.category)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    );

    result.sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [categories, priceRange, sortBy]);

  console.log("render");
  return (
    <div className="font-dm-sans">
      <Appbar />
      <Tagline />
      <div className="flex">
        <div className="h- bg-slate-700">
          <div>
            <span className="ml-3 pt-8 text-xl text-white font-semibold">
              Filter
            </span>
            <div className="mx-auto pl-2">
              <div className="p-4">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-4">
                      <h2 className="text-lg font-semibold mb-4">Categories</h2>
                      <div className="space-y-2">
                        {['Clothing', 'Shoes', 'Accessories'].map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={category}
                              checked={categories.includes(category)}
                              onCheckedChange={() => handleCategoryChange(category)}
                            />
                            <label
                              htmlFor={category}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h2 className="text-lg font-semibold mb-4">Price Range</h2>
                      <Slider
                        min={0}
                        max={200}
                        step={1}
                        value={priceRange}
                        onValueChange={handlePriceChange}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col justify-between items-center mb-4">
                  <h1 className="text-md font-semibold mt-3 mb-2 text-white">
                    Products
                  </h1>
                  <Select onValueChange={handleSortChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="p-3 w-full grid grid-cols-3 gap-2">
            {products.map((product) => (
              <div role='button'key={product.id}>
                <Link href={`/Product/${product.id}`}> <CategoryCard product={product} /></Link>
              </div>
           
            ))}
               
          </div>
        </div>
      </div>
    </div>
  );
}
