import React, { Component } from 'react';
import IdiomRow from './IdiomRow';
import { Button } from 'react-bootstrap';
import './style/IdiomForm.css';
import { User } from 'auth0';

interface IdiomFormProps {
    user: User;
}

interface IdiomFormState {
    rows: Array<{ id: number; idiom: string; translation: string; definition: string; example: string }>;
}

class IdiomForm extends Component<IdiomFormProps, IdiomFormState> {
    constructor(props: IdiomFormProps) {
        super(props);
        this.state = {
            rows: [{ id: 1, idiom: '', translation: '', definition: '', example: '' }]
        };
    }

    handleRowChange = (id: number, field: string, value: string) => {
        const rows = this.state.rows.map(row => {
            if (row.id === id) {
                return { ...row, [field]: value };
            }
            return row;
        });
        this.setState({ rows });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = { rows: this.state.rows, submittedBy: this.props.user.name };
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
                } else {
                    alert('New idioms submitted for review');
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                alert('An error occurred. Please try again later.');
                console.error('Error:', error);
            }
        }
        postData();
        alert('New idioms submitted for review');
        this.setState({ rows: [{ id: 1, idiom: '', translation: '', definition: '', example: '' }] });
    }

    onAddBtnClick = () => {
        const newId = this.state.rows.length + 1;
        this.setState({
            rows: [...this.state.rows, { id: newId, idiom: '', translation: '', definition: '', example: '' }]
        });
    }

    onDeleteBtnClick = () => {
        if (this.state.rows.length !== 1) {
            const rows = this.state.rows.filter(row => row.id !== this.state.rows.length);
            this.setState({ rows });
        } else {
            alert('Cannot delete the only row');
        }
    };

    onResetBtnClick = () => {
        this.setState({ rows: [{ id: 1, idiom: '', translation: '', definition: '', example: '' }] });
    };

    render() {
        return (
            <div className="idiom-form-container">
                <form onSubmit={this.handleSubmit}>
                    <table>
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
                        </tbody>
                    </table> &nbsp;
                    <Button className="button-spacing" onClick={this.onAddBtnClick}>Add</Button> &nbsp;
                    <Button className="button-spacing" onClick={this.onDeleteBtnClick}>Delete</Button> &nbsp;
                    <Button className="button-spacing" type="reset" onClick={this.onResetBtnClick}>Reset</Button> &nbsp;
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}

export default IdiomForm;