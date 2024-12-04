import db from '../../firestore.js';

export default async (req, context) => {
    try {
        const data = await req.json();
        const { userId, name, email } = data;

        // Reference the user's document using their Auth0 user ID
        const userDocRef = db.collection('users').doc(userId);

        // Get the user document
        const userDoc = await userDocRef.get();
        if (!userDoc.exists) {
            console.log("userDoc doesn't exist");
            // If the user document doesn't exist, create it
            await userDocRef.set({
                name: name,
                email: email,
                idioms: [], // Initialize an empty idioms array
                createdAt: new Date().toISOString(), // Timestamp for when the user was created
            });

            return new Response(JSON.stringify({ message: 'User initialized successfully' }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            console.log("userDoc exists");
            return new Response(JSON.stringify({ message: 'User already exists' }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    } catch (error) {
        console.error('Error initializing user:', error);
        return new Response(JSON.stringify({ message: 'Internal server error', error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};