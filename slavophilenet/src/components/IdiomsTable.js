import React from "react";

const IdiomsTable = ({ idioms, showAuthor = true, showStatus = false }) => {
    const renderIdioms = () => {
        return idioms
            .filter(idiom => showStatus || idiom.approvalStatus === 'approved')
            .map((idiom, index) => (
                <tr key={index}>
                    <td>{idiom.idiom}</td>
                    <td>{idiom.english}</td>
                    <td>{idiom.example}</td>
                    {showAuthor && <td>{idiom.submittedBy}</td>}
                    {showStatus && <td>{idiom.approvalStatus}</td>}
                </tr>
            ));
    };

    return (
        <table className="profile-table">
            <thead>
            <tr>
                <th>Idiom</th>
                <th>Meaning</th>
                <th>Example</th>
                {showAuthor && <th>Author</th>}
                {showStatus && <th>Status</th>}
            </tr>
            </thead>
            <tbody>
                {renderIdioms()}
            </tbody>
        </table>
    );
};

export default IdiomsTable;