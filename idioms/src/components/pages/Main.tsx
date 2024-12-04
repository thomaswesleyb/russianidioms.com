import { useEffect, useState } from "react";
import Placeholder from 'react-bootstrap/Placeholder';
import './css/Main.css';
import { useAuth0 } from "@auth0/auth0-react";
import IdiomFavoriteButton from "../IdiomFavoriteButton";
import {useIdioms} from "../IdiomStore";
import copyIcon from "../../img/copy.png";

export function Main() {
    const [loading, setLoading] = useState(true);
    const [randomIdiom, setRandomIdiom] = useState({ idiom: '', english: '',
        id: ''
    });
    const idioms = useIdioms().idioms;
    const { user } = useAuth0();

    useEffect(() => {
        const idiom = idioms[Math.floor(Math.random() * idioms.length)];
        setRandomIdiom({ idiom: idiom?.idiom, english: idiom?.english, id: idiom?.id });
        setLoading(false);
    }, [idioms]);

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
                <div>
                    <h2>Random Idiom</h2>
                    {user && !loading ? <IdiomFavoriteButton userId={user.sub} idiomId={randomIdiom?.id} /> : null}
                </div>
                {loading || !randomIdiom?.idiom || !randomIdiom?.english ? (
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={6} />
                        <Placeholder xs={12} />
                    </Placeholder>
                ) : (
                    <p>{randomIdiom?.idiom} &nbsp;
                        <img
                            src={copyIcon}
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