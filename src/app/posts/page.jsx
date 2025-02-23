import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const getPostsData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();

    // if (data) {
    //     redirect(`/posts/${data[0].id}`)
    // }
    return data;
}


export const metadata = {
    title: 'All Posts | Developer Ujjal',
    description: 'You can see all of the post from here.'

}


const PostsPage = async () => {
    const postsData = await getPostsData();
    console.log(postsData)

    return (
        <div className='p-5'>
            <h2 className='mb-5 text-center font-bold text-3xl'>All Posts is here</h2>
            <p>We are here to help you to make it more informational</p>
            <div className='grid grid-cols-4 gap-5'>
                {
                    postsData.map(({ id, title, body }) => {
                        return (
                            <div key={id} className='border'>
                                <h1 className={`test-purpose`}>{title}</h1>
                                <p className='mb-5'>{body}</p>
                                <Link href={`/posts/${id}`} className='px-2 py-1.5 bg-yellow-200 text-black'>Post Details</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PostsPage;