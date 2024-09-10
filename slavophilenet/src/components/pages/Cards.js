import {FlashcardArray} from "react-quizlet-flashcard";
import {useEffect, useState} from "react";
import '../style/Cards.css';
import {quantum} from "ldrs";

export function Cards() {
    const [idiomData, setIdiomData] = useState([]);
    const [loading, setLoading] = useState(true);
    quantum.register()

    const cardStyle = {
        backgroundColor: "var(--card-background)",
        color: "var(--card-text)",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr 1fr",
        gap: "10px",
        padding: "10px",
        textAlign: "center",
        fontFamily: "Garamond, Arial, sans-serif",
        fontSize: "1.5em",
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/.netlify/functions/firestore-handler');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setIdiomData(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const cards = idiomData.map(idiom => {
        return {
            frontHTML: idiom.data.idiom, backHTML: idiom.data.english,
        };
    });

    if (loading) {
        return <div className="cardsContainer">
            <l-quantum
                size="45"
                speed="1.75"
                color="black"
            />
        </div>;
    }

    return (<div className="cardsContainer">
        <FlashcardArray
            cards={cards}
            frontContentStyle={cardStyle}
            backContentStyle={cardStyle}
        />
    </div>);
}