import React from 'react';
import './style/Sidebar.css';
import {Link} from "react-router-dom";

export function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/idioms">Idioms</Link></li>
                <li><Link to="/cards">Flashcards</Link></li>
                <li><Link to="/new-idiom">Submit Idiom</Link></li>
                <li><Link to="/my-idioms">My Idioms</Link></li>
            </ul>
        </div>
    );
}