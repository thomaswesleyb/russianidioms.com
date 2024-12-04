import {useState} from 'react';
import './style/Sidebar.css';
import {Link} from "react-router-dom";

export function Sidebar() {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <div>
                <div className="sidebar-toggle" onClick={toggleSidebar}>
                    ☰ Menu
                </div>
            </div>
            <div className={`sidebar ${isActive ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/idioms">Idioms</Link></li>
                    <li><Link to="/cards">Flashcards</Link></li>
                    <li><Link to="/new-idiom">Submit Idiom</Link></li>
                    <li><Link to="/my-idioms">My Idioms</Link></li>
                </ul>
            </div>
        </div>
    );
}