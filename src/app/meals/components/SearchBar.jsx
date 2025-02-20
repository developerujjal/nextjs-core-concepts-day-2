'use client'

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchBar = () => {


    const [search, setSearch] = useState('');
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        const searchQuery = { search };
        const queryURL = new URLSearchParams(searchQuery);
        const url = `${pathName}?${queryURL}`;
        router.push(url)
    }, [search])

    return (
        <div className='text-center'>
            <input onChange={(e) => setSearch(e.target.value)} type="text" className='border' name="" id="" />
            <button className='border'>Search</button>
        </div>
    );
};

export default SearchBar;