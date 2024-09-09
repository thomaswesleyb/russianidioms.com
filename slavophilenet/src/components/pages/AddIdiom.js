import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import './css/Profile.css';

const Profile = () => {
    const {user} = useAuth0();

    return (<div className="profile-table-container">
            {!user ? (<p>You must be logged in to use this feature.</p>) : (
                <table className="profile-table">
                    <thead>
                    <tr>
                        <th>Idiom</th>
                        <th>Translation</th>
                        <th>Definition</th>
                        <th>Example</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
};

export default Profile;