import { FlashcardArray } from "react-quizlet-flashcard";
import { useEffect, useState, CSSProperties } from "react";
import '../style/Cards.css';
import {ApiIdiom, Idiom, transformApiIdiom} from "../../types/types.ts";

export function Cards() {
    const [idiomData, setIdiomData] = useState<Idiom[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const cardStyle: CSSProperties = {
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
                const data: ApiIdiom[] = await response.json();
                const transformedData: Idiom[] = data.map(transformApiIdiom);
                setIdiomData(transformedData);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const cards = idiomData.map((idiom, index) => ({
        id: index,
        frontHTML: idiom.idiom,
        backHTML: idiom.english,
    }));

    if (loading) {
        return <div className="cardsContainer"></div>;
    }

    return (
        <div className="cardsContainer">
            <FlashcardArray
                cards={cards}
                frontContentStyle={cardStyle}
                backContentStyle={cardStyle}
            />
        </div>
    );
}