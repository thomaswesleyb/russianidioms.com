import { useAuth0 } from "@auth0/auth0-react";

interface LoginButtonProps {
    useLogout?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ useLogout }) => {
    const { loginWithRedirect, logout, user } = useAuth0();

    return (
        <>
            {!user && <button onClick={() => loginWithRedirect()} className={"authButton"}>Log In</button>}
            {user && useLogout && (
                <button className="authButton" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button>
            )}
        </>
    );
};

export default LoginButton;