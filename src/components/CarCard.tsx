import Image from 'next/image';
import React from 'react';

export interface Car {
  id: number;
  name: string;
  category: string;
  available: boolean;
  image?: string;
  color: string;
  year: number;
  miles: number;
  price: number;
  transmission: string;
};

interface CardProps {
  car: Car;
}

const Card: React.FC<CardProps> = ({ car }) => (
  <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden w-min-144 h-auto max-w-full max-h-full m-4 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
    <div className="flex-shrink-0 p-2">
      <Image className="w-full object-cover" src={car.image || 'https://via.placeholder.com/150'} alt={car.name} width={500} height={300} />
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between">
      <div className="flex-1">
        <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">{car.name}</h2>
        <p className="mt-3 text-base leading-6 text-gray-500">Category: {car.category}</p>
      </div>
      <div className="mt-6 flex justify-between items-center">
        {car.available && (
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
          Available
          </span>
        )}
        <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
        £{car.price}
        </span>
      </div>
    </div>
  </div>
);

export default Card;
