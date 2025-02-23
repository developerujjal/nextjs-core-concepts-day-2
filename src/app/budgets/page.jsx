"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const BudgetsPage = () => {

    const route = useRouter();

    const handleGo = () => {
        route.push('/')
    }

    return (
        <div>
            <h1>This is About Two Page!</h1>
            <button onClick={handleGo} className='p-2 bg-yellow-400 text-black font-bold'>Go</button>
        </div>
    );
};

export default BudgetsPage;