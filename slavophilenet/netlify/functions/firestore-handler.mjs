import admin from 'firebase-admin';

// Initialize Firebase Admin with service account credentials
const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
};

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const db = admin.firestore();

export default async (req, context) => {
    try {
        const querySnapshot = await db.collection("idioms").get();

        // Convert Firestore documents to a JS array
        const docs = querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }));

        // Return Firestore data as JSON
        return new Response(JSON.stringify(docs), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("Error fetching data from Firestore:", error);

        // Handle errors
        return new Response(JSON.stringify({ error: "Failed to fetch data from Firestore" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
