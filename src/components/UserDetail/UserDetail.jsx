import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const user = useLoaderData();
    // console.log(user);
    return (
        <div>
            <h2>Detail of user:</h2>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address.street}, {user.address.city}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default UserDetail;