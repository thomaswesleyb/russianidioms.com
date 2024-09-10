import {Navigate} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import {quantum} from "ldrs";

const LoginRequired = ({ children }) => {
    const { user, isLoading } = useAuth0();
    const [loading, setLoading] = useState(true);
    quantum.register();

    useEffect(() => {
        if (!isLoading) {
            setLoading(false);
        }
    }, [isLoading]);

    if (loading) {
        return <div className="cardsContainer">
            <l-quantum
                size="45"
                speed="1.75"
                color="black"
            />
        </div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default LoginRequired;