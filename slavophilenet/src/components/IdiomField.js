import React from "react";
import {Textarea} from "@mui/joy";

class IdiomField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ''
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.value !== prevState.value) {
            return { value: nextProps.value };
        }
        return null;
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <Textarea
                value={this.state.value}
                onChange={this.handleChange}
                required={this.props.required}
            />
        );
    }
}

export default IdiomField;