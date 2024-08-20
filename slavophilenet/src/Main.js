import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Draggable from 'react-draggable';
import './Main.css';

export function Main() {
    const [idiomData, setIdiomData] = useState([]);

    useEffect(() => {
        fetch('https://russianidioms-6c824-default-rtdb.firebaseio.com/idioms.json') // replace with your Spring Boot application's endpoint
            .then(response => response.json())
            .then(data => setIdiomData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    function getRandomIdiom() {
        const idiom = idiomData[Math.floor(Math.random() * idiomData.length)];
        return { idiom: idiom?.idiom, english: idiom?.english };
    }
    const randomIdiom = getRandomIdiom();

    return (
        <div className="main-container">
            <Draggable>
                <div className="main-box">
                    <h1>Russianidioms.com</h1>
                    <p>Welcome to Russianidioms.com, the place to learn all about Russian idioms!</p>
                    <p>Here you can find a daily idiom, browse our idioms database, practice with flashcards, take a
                        quiz, and more!</p>
                </div>
            </Draggable>
                <div style={{padding: '1rem'}}></div>
            <Draggable>
                <div className={"main-box"}>
                    <h2>Random Idiom</h2>
                    <p>{randomIdiom.idiom} &nbsp;
                        <img
                            src={require("./img/copy.png")}
                            alt="copy"
                            className={"copy"}
                            onClick={() => navigator.clipboard.writeText(randomIdiom.idiom)}
                        />
                    </p>
                    <p>{randomIdiom.english}</p>
                </div>
            </Draggable>
        </div>
);
}