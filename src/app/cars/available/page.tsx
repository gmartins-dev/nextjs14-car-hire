'use client'

import CarsList from "@/components/CarsList";
import CategoryFilter, { CarCategory } from "@/components/CategoryFilter";
import Link from "next/link";
import { useState } from 'react';

export default function AvailableCars() {
  const [category, setCategory] = useState<"" | CarCategory>('');

  return (
    <>
      <div className="flex items-center justify-between mb-4 mt-4">
        <Link href="/" className="absolute top-0 left-0 my-4 ml-4 bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Back
        </Link>
        <CategoryFilter category={category} setCategory={setCategory} />
      </div>
      <CarsList category={category} />
    </>
  );
}
