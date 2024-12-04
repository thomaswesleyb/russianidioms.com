import db from '../../firestore.js';

export default async (req, context) => {
    try {
        const data = await req.json();

        // Data processing to remove empty fields
        Object.entries(data).forEach(([field, value]) => {
            if (value === '') {
                delete data[field];
            } else if (Array.isArray(value) && value.length > 0) {
                data[field] = value.filter(item => {
                    if (item === '') return false;
                    return Object.values(item).every(subValue => subValue !== '');
                });
                if (data[field].length === 0) {
                    delete data[field];
                }
            }
        });

        if (Object.keys(data).length <= 1) {
            return new Response(JSON.stringify({error: "No data to add"}), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const transformedData = data.rows.map(row => {
            return {
                idiom: row.idiom,
                english: row.translation,
                definition: row.definition,
                example: row.example,
                submittedBy: data.submittedBy,
                approvalStatus: "pending",
                createdAt: new Date()
            };
        });

        for (const idiom of transformedData) {
            await db.collection('idioms').add(idiom);
        }

        return new Response(JSON.stringify({ message: "Document added to Firestore" }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("Error adding document to Firestore:", error);

        return new Response(JSON.stringify({ error: "Failed to add document to Firestore" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};