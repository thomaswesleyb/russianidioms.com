import db from '../../firestore.js';

export default async (req, context) => {
    try {
        const querySnapshot = await db.collection("idioms").get();

        const docs = querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }));

        return new Response(JSON.stringify(docs), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("Error fetching data from Firestore:", error);

        return new Response(JSON.stringify({ error: "Failed to fetch data from Firestore" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};