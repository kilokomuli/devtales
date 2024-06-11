"use client"
import Link from 'next/link';
import { useRouter } from 'next/router';
import DevTalesLogo from './dave-logo';
import styles from './navbar.module.css';

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className="fixed top-0 left-0 flex items-center justify-between p-6 bg-white shadow-md w-full z-50">
            <Link href="/">
                <a className={`flex items-center ${router.pathname === '/' ? styles.active : ''}`}>
                    <div className="w-8 h-8">
                        <DevTalesLogo />
                    </div>
                    <span className="ml-2 text-2xl font-bold text-gray-900">DevTales</span>
                </a>
            </Link>
            <div className="flex space-x-6">
                <Link href="#about" className={`text-lg font-bold text-gray-800 hover:text-gray-900 ${router.pathname === '#about' ? styles.active : ''}`}>
                        About
                </Link>
                <Link href="#featured" className={`text-lg font-bold text-gray-800 hover:text-gray-900 ${router.pathname === '#featured' ? styles.active : ''}`}>
                        Blog
                </Link>
                <Link href="#contact" className={`text-lg font-bold text-gray-800 hover:text-gray-900 ${router.pathname === '#contact' ? styles.active : ''}`}>
                        Contact
                </Link>
            </div>
        </nav>
    );
}