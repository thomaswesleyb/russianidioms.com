import { FlashcardArray } from "react-quizlet-flashcard";
import { useEffect, useState } from "react";
import './style/Cards.css';

export function Cards() {
    const [idiomData, setIdiomData] = useState([]);

    useEffect(() => {
        fetch('https://russianidioms-6c824-default-rtdb.firebaseio.com/idioms.json') // replace with your Spring Boot application's endpoint
            .then(response => response.json())
            .then(data => setIdiomData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const cards = idiomData.map(idiom => {
        return {
            id: idiom.id,
            frontHTML: idiom.idiom,
            backHTML: idiom.english,
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