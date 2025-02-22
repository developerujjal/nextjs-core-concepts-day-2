import Image from 'next/image';
import React from 'react';
import { Monoton } from "next/font/google";


export const metadata = {
    title: {
        absolute: 'About us Mate'
    }
}

const monomakh = Monoton({
    weight: ['400'],
    subsets: ['latin']
})


const AboutPage = () => {
    return (
        <div>
            <h2 className={monomakh.className}>This is About Page!</h2>
            <div>
                <Image src='https://cdn.bdstall.com/product-image/giant_135029.jpg' alt='globe' width={400} height={400} />
            </div>

        </div>
    );
};

export default AboutPage;