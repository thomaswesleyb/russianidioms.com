import db from '../../firestore.js';

export default async (req, context) => {
    try {
        const data = await req.json();
        console.log("data before: ", data);

        // Data processing to remove empty fields
        for (const field in data) {
            if (data[field] === '') {
                delete data[field];
            } else if (Array.isArray(data[field]) && data[field].length > 0) {
                for (const key in data[field]) {
                    console.log("data[field][key]: ", data[field][key]);
                    if (data[field][key] === '') {
                        delete data[field];
                        break;
                    }
                    for (const subkey in data[field][key]) {
                        console.log("data[field][key][subkey]: ", data[field][key][subkey]);
                        if (data[field][key][subkey] === '') {
                            delete data[field];
                            break;
                        }
                    }
                }
            }
        }
        if (Object.keys(data).length <= 1) {
            return new Response(JSON.stringify({error: "No data to add"}), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        console.log("data after: ", data);

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
        console.log("transformedData: ", transformedData);

        const docRef = await db.collection("idioms").add(transformedData[0]);

        return new Response(JSON.stringify({ id: docRef.id }), {
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