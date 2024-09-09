import { FlashcardArray } from "react-quizlet-flashcard";
import { useEffect, useState } from "react";
import './style/Cards.css';

export function Cards() {
    const [idiomData, setIdiomData] = useState([]);
    const accessToken = ''

    useEffect(() => {
        fetch('https://firestore.googleapis.com/v1/projects/russianidioms-6c824/databases/(default)/documents/idioms', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }})
            .then(response => response.json())
            .then(data => setIdiomData(data.documents.map(doc => doc.fields)))
            .catch(error => console.error('Error:', error));
    }, []);

    console.log(idiomData);

    const cards = idiomData.map(idiom => {
        return {
            frontHTML: idiom.idiom.stringValue,
            backHTML: idiom.english.stringValue,
        };
    });

    return (
        <div className="cardsContainer">
            <FlashcardArray
                cards={cards}
                frontContentStyle={{
                    backgroundColor: "var(--card-background)",
                    color: "var(--card-text)",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "1fr 1fr 1fr",
                    gap: "10px",
                    padding: "10px",
                    textAlign: "center",
                    fontFamily: "Garamond, Arial, sans-serif",
                    fontSize: "1.5em",
                }}
                backContentStyle={{
                    backgroundColor: "var(--card-background)",
                    color: "var(--card-text)",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "1fr 1fr 1fr",
                    gap: "10px",
                    padding: "10px",
                    textAlign: "center",
                    fontFamily: "Garamond, Arial, sans-serif",
                    fontSize: "1.5em",
                }}
            />
        </div>
    );
}