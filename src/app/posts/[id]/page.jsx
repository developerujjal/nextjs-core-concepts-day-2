import React from 'react';

const getSinglePostData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}


const PostDetails = async ({ params }) => {

    const param = await params;
    console.log(param)

    const getData = await getSinglePostData(param?.id);

    console.log(getData)

    return (
        <div>
            <h1>{getData?.title}</h1>
            <p>{getData?.body}</p>
        </div>
    );
};

export default PostDetails;