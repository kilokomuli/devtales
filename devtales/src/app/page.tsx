// import { lusitana } from "./ui/fonts";
import Link from 'next/link';
import DevTalesLogo from './ui/dave-logo';
// import Navbar from './ui/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col md:flex-row md:h-52">
        <DevTalesLogo />
        {/* <Navbar /> */}
      </div>
    </main>
  );
}
