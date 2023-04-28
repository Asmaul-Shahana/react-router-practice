import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const { id, name, username, email, address, phone, website, company } = user;
    return (
        <div className='user'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/user/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default User;