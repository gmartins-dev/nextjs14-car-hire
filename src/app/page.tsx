import Button from '@/components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-800 text-white">
      <div className="flex flex-row w-full h-full">
        <div className="flex items-center justify-center w-1/2">
          <Link href="/users/register">
            <Button bgColor="bg-blue-700">Register Vehicle</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <Link href="/cars/available">
            <Button bgColor="bg-cyan-700">Available Cars</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
