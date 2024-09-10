import IdiomField from "./IdiomField";
import React from "react";

class IdiomRow extends React.Component {
    handleFieldChange = (field, value) => {
        this.props.onRowChange(this.props.id, field, value);
    }

    render() {
        return (
            <tr>
                <td>
                    <IdiomField
                        value={this.props.data.idiom}
                        onChange={(value) => this.handleFieldChange('idiom', value)}
                        required={true}
                    />
                </td>
                <td>
                    <IdiomField
                        value={this.props.data.translation}
                        onChange={(value) => this.handleFieldChange('translation', value)}
                        required={true}
                    />
                </td>
                <td>
                    <IdiomField
                        value={this.props.data.definition}
                        onChange={(value) => this.handleFieldChange('definition', value)}
                        required={true}
                    />
                </td>
                <td>
                    <IdiomField
                        value={this.props.data.example}
                        onChange={(value) => this.handleFieldChange('example', value)}
                        required={false}
                    />
                </td>
            </tr>
        );
    }
}

export default IdiomRow;