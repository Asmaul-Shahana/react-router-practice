import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    
    // using navigate 
    const navigate = useNavigate();
    const handlePostDetail = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Show Details</Link>
            {/* option 1: to add path link to btn */}
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
            {/* option 1: to add path link to btn */}
            <button onClick={handlePostDetail}>Post Detail</button>
        </div>
    );
};

export default Post;