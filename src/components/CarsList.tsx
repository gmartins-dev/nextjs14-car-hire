'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';



interface Car {
  id: number;
  name: string;
  category: string;
  available: boolean;
  image?: string;
};

export default function CarsList() {

  const [cars, setCars] = useState<Car[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(() => setHasError(true));
  }, []);

  if (hasError) {
    return <div>Sorry, something went wrong. Can't get the cars list.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cars.map((car: Car) => (
        <div key={car.id} className="p-6 border rounded-md shadow-sm">
          <div className="w-full h-48 mb-4 rounded overflow-hidden relative">
            <Image src={car.image || 'https://via.placeholder.com/150'} alt={car.name} layout="fill" objectFit="contain" />
          </div>
          <h2 className="text-xl font-bold">{car.name}</h2>
          <p className="mt-2 text-gray-600">Category: {car.category}</p>
          <span className={`inline-block mt-2 px-3 py-1 text-sm font-semibold text-white ${car.available ? 'bg-green-500' : 'bg-red-500'} rounded-full`}>
            {car.available ? 'Available' : 'Not Available'}
          </span>
        </div>
      ))}
    </div>
  );
}
