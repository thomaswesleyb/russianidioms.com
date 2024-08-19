import { Link } from "react-router-dom";
import './style/Header.css';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export function Header() {
    const [darkMode, setDarkMode] = useState(false);

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
                <Link to="/login" className="authButton">Login</Link>
                <Link to="/register" className="authButton">Register</Link>
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