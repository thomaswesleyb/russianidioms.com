import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface LoginRequiredProps {
    children: ReactNode;
}

const LoginRequired: React.FC<LoginRequiredProps> = ({ children }) => {
    const { user, isLoading } = useAuth0();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!isLoading) {
            setLoading(false);
        }
    }, [isLoading]);

    if (loading) {
        return <div className="cardsContainer"></div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default LoginRequired;