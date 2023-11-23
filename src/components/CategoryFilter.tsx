import { ChangeEvent } from 'react';

export type CarCategory = 'SUV' | 'Sedan' | 'Pickup' | 'Sports';

interface CategoryFilterProps {
  category: CarCategory | '';
  setCategory: (category: CarCategory | '') => void;
}

export default function CategoryFilter({ category, setCategory }: CategoryFilterProps) {
  return (
    <div className="flex items-center space-x-2 ml-auto mr-4 mt-6">
      <span className="text-md font-semibold text-gray-700">Select your car category:</span>
      <select
        value={category}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setCategory(e.target.value as CarCategory | '');
        }}
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">All</option>
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
        <option value="Pickup">Pickup</option>
        <option value="Sports">Sports</option>
      </select>
    </div>
  );
}
