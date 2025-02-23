import React from 'react';

const DynamicOnePage = async({params}) => {

    const param = await params;

    console.log(param)
    return (
        <div>
            <h2>This is Dynamic Page</h2>
            <p>{param?.id}</p>
        </div>
    );
};

export default DynamicOnePage;