export default async (req, context) => {
    const requestKey = req.headers.get("X-API-Key");
    const apiKey = Netlify.env.get("API_KEY");


    try {
        const response = await fetch('https://firestore.googleapis.com/v1/projects/russianidioms-6c824/databases/(default)/documents/idioms', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            }
        });

        const data = await response.json();
        return data.documents.map(doc => doc.fields);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};