import Link from 'next/link';
import DevTalesLogo from './dave-logo';


export default function Navbar() {
    return (
        <nav className="flex flex-col md:flex-row md:h-52">
            <div className="flex flex-row justify-center md:items-center">
                <Link
                    className=''
                    href="/">
                        <div className="w-32">
                            <DevTalesLogo />
                        </div>
                </Link>
                <Link className="text-lg font-bold text-gray-800 hover:text-gray-900"
                    href="/about">
                    About
                </Link>
                <Link className="text-lg font-bold text-gray-800 hover:text-gray-900 ml-4"
                    href="/blog">
                    Blog
                </Link>
                <Link className="text-lg font-bold text-gray-800 hover:text-gray-900 ml-4"
                    href="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    );
}