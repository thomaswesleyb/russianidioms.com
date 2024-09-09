export default async (req, context) => {
    const apiKey = process.env.API_KEY;

    try {
        const response = await fetch('https://firestore.googleapis.com/v1/projects/russianidioms-6c824/databases/(default)/documents/idioms', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const responseBody = JSON.stringify(data.documents.map(doc => doc.fields));

        console.log('responseBody:', responseBody);

        return new Response(responseBody, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};