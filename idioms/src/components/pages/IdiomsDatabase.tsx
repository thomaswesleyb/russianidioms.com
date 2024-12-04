import React from "react";
import './css/MyIdioms.css';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useIdioms } from "../IdiomStore";
import IdiomsTable from "../IdiomsTable";

const IdiomsDatabase: React.FC = () => {
    const idioms = useIdioms();
    const navigate = useNavigate();
    const { user } = useAuth0();

    const goToMyIdioms = () => {
        navigate('/my-idioms');
    };

    return (
        <div className="idiom-page">
            <div className="idiom-page-header">
                <h1>All idioms</h1>
            </div>
            <div className="profile-table-container">
                <IdiomsTable idioms={idioms} />
                {user ? (
                    <button onClick={goToMyIdioms} className="my-idioms-button">
                        Go to My Idioms
                    </button>
                ) : (
                    <p>Login to go to your personalized idiom page</p>
                )}
            </div>
        </div>
    );
};

export default IdiomsDatabase;