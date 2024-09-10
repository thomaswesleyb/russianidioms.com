import React from 'react';
import './style/Sidebar.css';
import {Link} from "react-router-dom";

export function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="#section1">Daily idiom</a></li>
                <li><Link to="/idioms">Idioms</Link></li>
                <li><Link to="/cards">Flashcards</Link></li>
                <li><a href="#section4">Quiz</a></li>
                <li><a href="#section5">External Resources</a></li>
                <li><a href="#section6">Grammar</a></li>
                <li><a href="#section7">Vocabulary</a></li>
                <li><Link to="/new-idiom">Submit Idiom</Link></li>
                <li><Link to="/my-idioms">My Idioms</Link></li>
            </ul>
        </div>
    );
}