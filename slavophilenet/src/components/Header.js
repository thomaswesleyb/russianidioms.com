import { Link } from "react-router-dom";
import './style/Header.css';
import {useEffect, useState} from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {useAuth0} from "@auth0/auth0-react";

export function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    const initializeUser = async (userId, name, email) => {
        try {
            const response = await fetch('/.netlify/functions/firestore-initialize-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    name,
                    email,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data.message);
            } else {
                console.error('Error:', data.message);
            }
        } catch (error) {
            console.error('Error initializing user:', error);
        }
    };

    const loginUser = async () => {
        await loginWithRedirect();
    }

    useEffect(() => {
        console.log("user: ", user);
        console.log("user.sub: ", user?.sub);
        console.log("user.name: ", user?.name);
        console.log("user.email: ", user?.email);
        if (user) {
            initializeUser(user.sub, user.name, user.email);
        }
    }, [user]);

    return (
        <header className="header">
            <Link to="/" className="headerTitle">
                <h1>Russianidioms.com</h1>
            </Link>
            <div className="authButtons">
                {
                    !isLoading && !user && (
                        <button onClick={loginUser} className="authButton">Login</button>
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