import Link from 'next/link';
import DevTalesLogo from './dave-logo';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 flex items-center justify-between p-6 bg-white shadow-md w-full z-50">
                <Link href="/" className="flex items-center">
                    <div className="w-8 h-8">
                    <DevTalesLogo />
                    </div>
                    <span className="ml-2 text-2xl font-bold text-gray-900">DevTales</span>
                </Link>
            <div className="flex space-x-6">
                <Link href="#about" className="text-lg font-bold text-gray-800 hover:text-gray-900">
                    About
                </Link>
                <Link href="/blog" className="text-lg font-bold text-gray-800 hover:text-gray-900">
                    Blog
                </Link>
                <Link href="/contact" className="text-lg font-bold text-gray-800 hover:text-gray-900">
                    Contact
                </Link>
            </div>
        </nav>
    );
}