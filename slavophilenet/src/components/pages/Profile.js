import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './css/Profile.css';

const Profile = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    return (
        <div className="profile-table-container">
            <table className="profile-table">
                <thead>
                <tr>
                    <th>Profile Picture</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img src={picture} alt="Profile" className="profile-picture" /></td>
                    <td>{name}</td>
                    <td>{email}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Profile;