import React from 'react';
import IdiomRow from "./IdiomRow";
import {Button} from "react-bootstrap";
import './style/IdiomForm.css';

class IdiomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [{id: 1, idiom: '', translation: '', definition: '', example: ''}]
        };
    }

    handleRowChange = (id, field, value) => {
        const rows = this.state.rows.map(row => {
            if (row.id === id) {
                return {...row, [field]: value};
            }
            return row;
        });
        this.setState({rows});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const payload = {rows: this.state.rows, submittedBy: this.props.user.name};
        const postData = async () => {
            try {
                const response = await fetch('/.netlify/functions/firestore-post-handler', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    if (response.status >= 400 && response.status < 500) {
                        alert('One or more fields are empty');
                    }
                    return;
                }

                alert('New idioms submitted for review');
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        postData();
        this.setState({rows: [{id: 1, idiom: '', translation: '', definition: '', example: ''}]});
    }

    onAddBtnClick = () => {
        const newId = this.state.rows.length + 1;
        this.setState({
            rows: [...this.state.rows, {id: newId, idiom: '', translation: '', definition: '', example: ''}]
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <table className="profile-table">
                    <thead>
                    <tr>
                        <th>Idiom</th>
                        <th>Translation</th>
                        <th>Definition</th>
                        <th>Example</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.rows.map((row) => (
                        <IdiomRow
                            key={row.id}
                            id={row.id}
                            data={row}
                            onRowChange={this.handleRowChange}
                        />
                    ))}
                    <tr>
                        <td>
                            <Button className="button-spacing" onClick={this.onAddBtnClick}>Add</Button>
                            <Button onClick={this.handleSubmit}>Submit</Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default IdiomForm;