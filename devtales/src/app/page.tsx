// import { lusitana } from "./ui/fonts";
import Link from 'next/link';
import Navbar from './ui/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 items-start">
      <div className="flex flex-col md:flex-row md:h-52 p-4 justify-between w-full mt-0">
        <Navbar />
      </div>
      <div>
        <h1 className="text-4xl font-bold">Welcome to DevTales</h1>
        <p className="text-lg">A place to share your dev stories</p>
      </div>
    </main>
  );
}
