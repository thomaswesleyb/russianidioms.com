import { Link } from "react-router-dom";
import './style/Header.css';
import homeIcon from '../img/home-icon.png';
import koschei from '../img/koschei-head.png';
import { useState } from 'react';

export function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <header className="header">
            <Link to="/" className="homeButton">
                <img src={homeIcon} alt="Home" className="homeIcon"/>
            </Link>
            <div className="authButtons">
                <Link to="/login" className="authButton">Login</Link>
                <Link to="/register" className="authButton">Register</Link>
                <img src={koschei} alt="darkMode" className={"koschei"} onClick={toggleDarkMode}/>
            </div>
        </header>
    );
}