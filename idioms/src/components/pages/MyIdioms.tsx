import { useEffect, useState } from "react";
import './css/MyIdioms.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useIdioms } from "../IdiomStore";
import IdiomsTable from "../IdiomsTable";

const MyIdioms = () => {
    const { user } = useAuth0();
    const [savedIdioms, setSavedIdioms] = useState([]);
    const idioms = useIdioms().idioms;// @ts-ignore
    const submittedIdioms = idioms.filter(idiom => idiom.submittedBy === user.name);

    useEffect(() => {
        const fetchSavedIdioms = async () => {
            try {
                const response = await fetch('/.netlify/functions/firestore-get-user-idioms', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // @ts-ignore
                    body: JSON.stringify({ user_id: user.sub })
                });
                const userData = await response.json();// @ts-ignore
                try {
                    const response = await fetch('/.netlify/functions/firestore-get-idioms', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ idiom_ids: userData.idioms || [] })
                    });
                    let idiomData = await response.json();
                    idiomData = idiomData.filter((idiom: { id: string; }) => userData.idioms.includes(idiom.id));
                    setSavedIdioms(idiomData || []);
                } catch (error) {
                    console.error('Error fetching saved idioms:', error);
                }
            } catch (error) {
                console.error('Error fetching saved idioms:', error);
            }
        };

        if (user) {
            fetchSavedIdioms();
        }
    }, [user]);

    return (
        <div className="idiom-page">
            <div className="idiom-page-header">
                <h1>Your personalized idiom page</h1>
            </div>

            <div className="profile-table-container">
                <h1>Submitted idioms</h1>
                <IdiomsTable idioms={[...submittedIdioms]} showAuthor={false} showStatus={true}/>
            </div>
            <div className="profile-table-container">
                <h1>Saved idioms</h1>
                <IdiomsTable idioms={[...savedIdioms]} showAuthor={true}/>
            </div>
        </div>
    );
};

export default MyIdioms;