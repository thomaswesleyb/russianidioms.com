import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import './css/Profile.css';

interface User {
    name: string;
    picture: string;
    email: string;
}

const Profile: React.FC = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user as User;
    const navigate = useNavigate();

    const goToMyIdioms = () => {
        navigate('/my-idioms');
    };

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
            <button onClick={goToMyIdioms} className="my-idioms-button">
                Go to My Idioms
            </button>
        </div>
    );
};

export default Profile;