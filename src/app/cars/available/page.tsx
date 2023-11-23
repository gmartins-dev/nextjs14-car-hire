import CarsList from "@/components/CarsList";
import Link from "next/link";

export default function AvailableCars() {
  return (
    <>
      <Link href="/" className="absolute top-0 left-0 my-4 ml-4 bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Back
      </Link>
      <CarsList />
    </>
  );
}
