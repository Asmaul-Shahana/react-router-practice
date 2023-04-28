import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
    const post = useLoaderData();

    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div className='post-detail'>
            <h3>Detail of post: {post.id}</h3>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <button onClick={handleGoBack}>Back</button>
        </div>
    );
};

export default PostDetail;