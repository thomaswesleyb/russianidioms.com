import { Link } from "react-router-dom";
import './style/Header.css';
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton.tsx";

export function Header() {
    const { user, isLoading } = useAuth0();

    const initializeUser = async (userId: string | undefined, name: string | undefined, email: string | undefined) => {
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

    useEffect(() => {
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
                        <LoginButton />
                    )
                }
                {
                    !isLoading && user && (
                        <LoginButton useLogout={true}/>
                    )
                }
                {
                    !isLoading && user && (
                        <Link to="/profile" className="authButton">Profile</Link>
                    )
                }
            </div>
        </header>
    );
}