import db from '../../firestore.js';

export default async (req, context) => {
    try {
        const data = await req.json();
        const { user_id } = data;

        // Reference the user's document using their Auth0 user ID
        const userDocRef = db.collection('users').doc(user_id);

        // Get the user document
        const userDoc = await userDocRef.get();
        if (!userDoc.exists) {
            return new Response(JSON.stringify({ message: 'User does not exist' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Get the idioms array
        const userData = userDoc.data();
        const idioms = userData.idioms || [];

        return new Response(JSON.stringify({ idioms }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error getting idioms for user:', error);
        return new Response(JSON.stringify({ message: 'Internal server error', error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}