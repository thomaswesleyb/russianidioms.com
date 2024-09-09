import { FlashcardArray } from "react-quizlet-flashcard";
import { useEffect, useState } from "react";
import '../style/Cards.css';

export function Cards() {
    const [idiomData, setIdiomData] = useState([]);

    useEffect(() => {
        fetch('/.netlify/functions/idiom-requests')
            .then(response => response.json())
            .then(data => setIdiomData(data))
            .catch(error => console.error('Error:', error));
    }, []);

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