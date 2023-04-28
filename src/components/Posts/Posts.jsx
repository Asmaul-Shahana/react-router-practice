import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Posts.css';
import Post from '../Post/Post';

const POsts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Here are the posts: {posts.length}</h2>
            {
                posts.map(post => <Post key={post.id} 
                post={post}></Post>)
            }
        </div>
    );
};

export default POsts;