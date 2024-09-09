import React, { useEffect, useState } from "react";
import Placeholder from 'react-bootstrap/Placeholder';
import './css/Main.css';
import { useAuth0 } from "@auth0/auth0-react";

export function Main() {
    const [randomIdiom, setRandomIdiom] = useState({ idiom: '', english: '' });
    const [loading, setLoading] = useState(true);
    const { user } = useAuth0();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/.netlify/functions/firestore-handler');
                const data = await response.json();

                if (data.length > 0) {
                    const idiom = data[Math.floor(Math.random() * data.length)];
                    setRandomIdiom({ idiom: idiom?.data?.idiom, english: idiom?.data?.english });
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="main-container">
            {user ? (<p>Welcome, {user.name}!</p>) : null}
            <div className="main-box">
                <h1>Russianidioms.com</h1>
                <p>Welcome to Russianidioms.com, the place to learn all about Russian idioms!</p>
                <p>Here you can find a daily idiom, browse our idioms database, practice with flashcards, take a quiz, and more!</p>
            </div>
            <div style={{ padding: '1rem' }}></div>
            <div className={"main-box"}>
                <h2>Random Idiom</h2>
                {loading || !randomIdiom ? (
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={6} />
                        <Placeholder xs={12} />
                    </Placeholder>
                ) : (
                    <p>{randomIdiom?.idiom} &nbsp;
                        <img
                            src={require("../../img/copy.png")}
                            alt="copy"
                            className={"copy"}
                            onClick={() => navigator.clipboard.writeText(randomIdiom?.idiom)}
                        />
                    </p>
                )}
                <p>{randomIdiom?.english}</p>
            </div>
        </div>
    );
}