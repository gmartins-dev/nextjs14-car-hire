import Image from 'next/image';
import React from 'react';
import { Car } from './CarsList';

interface CardProps {
  car: Car;
}

const Card: React.FC<CardProps> = ({ car }) => (
  <div className="p-6 border rounded-md shadow-sm">
    <div className="w-full h-48 mb-4 rounded overflow-hidden relative p-2">
      <Image src={car.image || 'https://via.placeholder.com/150'} alt={car.name} layout="fill" objectFit="contain" />
    </div>
    <h2 className="text-xl font-bold">{car.name}</h2>
    <p className="mt-2 text-gray-600">Category: {car.category}</p>
    {car.available && (
      <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
        Available
      </span>
    )}
  </div>
);

export default Card;
