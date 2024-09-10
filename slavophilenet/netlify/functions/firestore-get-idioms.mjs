import db from '../../firestore.js';

export default async (req, context) => {
    try {
        // Reference the idioms collection
        const idiomsCollection = db.collection('idioms');

        // Get all documents from the idioms collection
        const snapshot = await idiomsCollection.get();

        // Map the documents to an array of idiom data
        const idioms = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // Return the idiom data
        return new Response(JSON.stringify(idioms), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error retrieving idioms:', error);
        return new Response(JSON.stringify({ message: 'Internal server error', error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};