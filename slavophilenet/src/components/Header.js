import { Link } from "react-router-dom";
import './style/Header.css';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {useAuth0} from "@auth0/auth0-react";

export function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <header className="header">
            <Link to="/" className="headerTitle">
                <h1>Russianidioms.com</h1>
            </Link>
            <div className="authButtons">
                {
                    !isLoading && !user && (
                        <button onClick={loginWithRedirect} className="authButton">Login</button>
                    )
                }
                {
                    !isLoading && user && (
                        <button className= "authButton" onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                            Log Out
                        </button>
                    )
                }
                {
                    !isLoading && user && (
                        <Link to="/profile" className="authButton">Profile</Link>
                    )
                }
                <DarkModeSwitch
                    style={{ marginRight: '.5rem' }}
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    size={40}
                />
            </div>
        </header>
    );
}