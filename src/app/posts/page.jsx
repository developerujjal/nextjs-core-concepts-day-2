import React from 'react';

const getPostsData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}


const PostsPage = async () => {
    const postsData = await getPostsData();
    console.log(postsData)

    return (
        <div className='p-5'>
            <h2 className='mb-5 text-center font-bold text-3xl'>All Posts is here</h2>
            <div className='grid grid-cols-4 gap-5'>
                {
                    postsData.map(({ id, title, body }) => {
                        return (
                            <div key={id} className='border'>
                                <h1>{title}</h1>
                                <p>{body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PostsPage;