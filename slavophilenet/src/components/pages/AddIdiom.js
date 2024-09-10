import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import './css/Profile.css';
import IdiomForm from "../IdiomForm";

const Profile = () => {
    const {user} = useAuth0();

    return (<div className="profile-table-container">
            {!user ? (<p>You must be logged in to use this feature.</p>) : (
                <IdiomForm user={user}/>
            )}
        </div>
    )
};

export default Profile;