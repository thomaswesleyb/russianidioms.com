import React from "react";
import IdiomField from "./IdiomField";

interface IdiomRowProps {
    id: number;
    data: { id: number; idiom: string; translation: string; definition: string; example: string };
    onRowChange: (id: number, field: string, value: string) => void;
}

class IdiomRow extends React.Component<IdiomRowProps> {
    handleFieldChange = (field: string, value: string) => {
        this.props.onRowChange(this.props.id, field, value);
    }

    render() {
        return (
            <tr>
                <td>
                    <IdiomField
                        value={this.props.data.idiom}
                        onChange={(value: string) => this.handleFieldChange('idiom', value)}
                        required={true}
                    />
                </td>
                <td>
                    <IdiomField
                        value={this.props.data.translation}
                        onChange={(value: string) => this.handleFieldChange('translation', value)}
                        required={true}
                    />
                </td>
                <td>
                    <IdiomField
                        value={this.props.data.definition}
                        onChange={(value: string) => this.handleFieldChange('definition', value)}
                        required={true}
                    />
                </td>
                <td>
                    <IdiomField
                        value={this.props.data.example}
                        onChange={(value: string) => this.handleFieldChange('example', value)}
                        required={false}
                    />
                </td>
            </tr>
        );
    }
}

export default IdiomRow;