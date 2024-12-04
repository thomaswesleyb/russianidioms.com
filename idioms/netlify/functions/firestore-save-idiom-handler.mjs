import db from '../../firestore.js';

export default async (req, context) => {
    try {
        const data = await req.json();
        const { user_id, idiom_id } = data;

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

        // Check if the idiomId already exists in the idioms array
        const userData = userDoc.data();
        if (userData.idioms && userData.idioms.includes(idiom_id)) {
            return new Response(JSON.stringify({ message: 'Idiom already exists' }), {
                status: 409,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const currentIdioms = userData.idioms || [];

        if (!currentIdioms.includes(idiom_id)) {
            currentIdioms.push(idiom_id);
        }

        // Update the idioms array
        await userDocRef.update({
            idioms: currentIdioms
        });

        return new Response(JSON.stringify({ message: 'Idiom added successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error adding idiom to user:', error);
        return new Response(JSON.stringify({ message: 'Internal server error', error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};