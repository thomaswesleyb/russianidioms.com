import React from 'react';
import './style/Sidebar.css';

export function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="#section1">Daily idiom</a></li>
                <li><a href="#section2">Idioms database</a></li>
                <li><a href="#section3">Flashcards</a></li>
                <li><a href="#section4">Quiz</a></li>
                <li><a href="#section5">External Resources</a></li>
                <li><a href="#section6">Grammar</a></li>
                <li><a href="#section7">Vocabulary</a></li>
            </ul>
        </div>
    );
}