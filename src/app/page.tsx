import Button from '@/components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-800 text-white">
      <div className="flex flex-row w-full h-full">
        <div className="flex items-center justify-center w-1/2">
          <Link href="/users/register">
            <Button bgColor="bg-blue-600 hover:bg-blue-700 transition-colors duration-200">👤 User Registration</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <Link href="/cars/available">
            <Button bgColor="bg-green-500 hover:bg-green-600 transition-colors duration-200">🚗 Available Cars</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
