"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {

    const pathName = usePathname();

    return (
        <nav className="bg-yellow-400">
            <ol className="flex justify-center gap-5 py-3">
                <li><Link href={'/'} className={`${pathName === '/' && 'text-black font-bold'}`}>Home</Link></li>
                <li><Link href={'/about'} className={`${pathName === '/about' && 'text-black font-bold'}`}>About</Link></li>
                <li><Link href={'/posts'} className={`${pathName === '/blog' && 'text-black font-bold'}`}>Posts</Link></li>
                <li><Link href={'/services'} className={`${pathName === '/service' && 'text-black font-bold'}`}>Services</Link></li>
                <li><Link href={'/contact'} className={`${pathName === '/contact' && 'text-black font-bold'}`}>Contact</Link></li>
            </ol>
        </nav>
    );
};

export default NavBar;