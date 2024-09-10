import React from "react";

class IdiomField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ''
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
}

export default IdiomField;