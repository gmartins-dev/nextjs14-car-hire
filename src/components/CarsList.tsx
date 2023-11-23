'use client'
import { getCars } from '@/services/CarsService';
import { useEffect, useState } from 'react';
import Card from './CarCard';



export interface Car {
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
    getCars()
      .then(data => setCars(data))
      .catch(() => setHasError(true));
  }, []);

  if (hasError) {
    return <div>Sorry, something went wrong. Can't get the cars list.</div>;
  }

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {cars.filter(car => car.available).map((car: Car) => (
      <Card key={car.id} car={car} />
    ))}
  </section>
  );
}
