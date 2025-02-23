import React from 'react';

const AllDynamicStuff = async ({ params }) => {
    const param = await params;

    console.log(param)

    if(params.id.length === 2){
        return <div>{params.id[1]}</div>
    }

    if(params.id.length === 3){
        return <div>{params.id[2]}</div>
    }
    

    return (
        <div>
            <p>This is a dynamic page </p>
        </div>
    );
};

export default AllDynamicStuff;