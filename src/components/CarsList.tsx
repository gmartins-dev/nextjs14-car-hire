'use client'
import { CarCategory } from "@/components/CategoryFilter";
import { getCars } from '@/services/CarsService';
import { useEffect, useState } from 'react';
import Card, { Car } from "./CarCard";

interface CarsListProps {
  category: "" | CarCategory;
}

export default function CarsList({ category }: CarsListProps) {
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
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto h-full m-4 mt-16">
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {cars.filter(car => car.available && (!category || car.category === category)).map((car: Car) => (
          <Card key={car.id} car={car} />
        ))}
      </section>
    </div>
  );
}
