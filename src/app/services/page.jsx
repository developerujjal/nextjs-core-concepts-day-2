import React from 'react';

const getTime = async () => {
    const res = await fetch('http://localhost:3000/api/items', { next: { revalidate: 5 } });
    const data = res.json();
    return data;
}


const ServicesPage = async () => {

    const timeData = await getTime();

    console.log(timeData)
    return (
        <div>
            <h2>this is Services page</h2>
            <h2>{timeData?.time}</h2>
        </div>
    );
};

export default ServicesPage;