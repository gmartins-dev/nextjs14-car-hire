'use client'

import { useFormData } from '@/app/contexts/FormDataContext';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  plate: string;
  parkingDetails: string;
  driverAge: string;
  carPreference: string;
}

export default function RegisterUserForm() {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    plate: '',
    parkingDetails: '',
    driverAge: '',
    carPreference: '',
  });

  const { submittedData, setSubmittedData } = useFormData();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //just to simulate a unique id generated by the server
    const id = Math.floor(Math.random() * 1000000).toString();
    const dataWithId = {
      id,
      ...formData
    };
    setSubmittedData(JSON.stringify(dataWithId));
  };

  return (
  <>
    <Link href="/" className="absolute top-0 left-0 my-4 ml-4 bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Back
    </Link>
    <div className="flex flex-col items-center justify-center mt-16 mb-8 bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 py-3 w-full max-w-md">
        <input name="name" placeholder="Name" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
        <input name="email" placeholder="Email" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
        <input name="plate" placeholder="Plate" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
        <input name="parkingDetails" placeholder="Parking Details" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
        <input name="driverAge" placeholder="Driver's Age" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
        <select name="carPreference" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
          <option value="">Select Car Preference</option>
          <option value="suv">SUV</option>
          <option value="sedan">Sedan</option>
          <option value="pickup">Pickup</option>
          <option value="sports">Sports</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
     </div>
  </>
  );
}
