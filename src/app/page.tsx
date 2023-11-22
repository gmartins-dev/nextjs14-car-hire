import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-800 text-white">
      <div className="flex flex-row w-full h-full">
        <div className="flex items-center justify-center w-1/2">
          <Link href="/users/register">
            <button className="p-4 m-4 bg-blue-700 text-white rounded-lg font-bold text-xl">Register Vehicle</button>
          </Link>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <Link href="/cars/available">
            <button className="p-4 m-4  bg-cyan-700 text-white rounded-lg font-bold text-xl">Available Cars</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
