import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';

interface Auth0ProviderWithHistoryProps {
    children: ReactNode;
}

const Auth0ProviderWithHistory: React.FC<Auth0ProviderWithHistoryProps> = ({ children }) => {
    const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

    const navigate = useNavigate();

    const onRedirectCallback = (appState: any) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    const auth0ProviderOptions: Auth0ProviderOptions = {
        domain,
        clientId,
        onRedirectCallback,
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    };

    return (
        <Auth0Provider {...auth0ProviderOptions}>
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;