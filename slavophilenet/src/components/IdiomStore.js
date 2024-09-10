import React, { createContext, useState, useEffect, useContext } from 'react';

const IdiomContext = createContext();

export const IdiomProvider = ({ children }) => {
    const [idioms, setIdioms] = useState([]);

    useEffect(() => {
        const fetchIdioms = async () => {
            try {
                const response = await fetch('/.netlify/functions/firestore-get-idioms');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const idiomsData = await response.json();
                setIdioms(idiomsData);
            } catch (error) {
                console.error('Error retrieving idioms:', error);
            }
        };

        fetchIdioms();
    }, []);

    return (
        <IdiomContext.Provider value={idioms}>
            {children}
        </IdiomContext.Provider>
    );
};

export const useIdioms = () => {
    return useContext(IdiomContext);
};