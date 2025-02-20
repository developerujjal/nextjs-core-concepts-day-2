import React from 'react';
import style from './post.module.css'

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
        <div className='p-10'>

            {/* both will work */}
            {/* <h1 className={`${style['hot-style']}`}>{getData?.title}</h1> */}
            <h1 className={style.hot_style}>{getData?.title}</h1>

            <p>{getData?.body}</p>
        </div>
    );
};

export default PostDetails;