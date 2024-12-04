import React, { ChangeEvent } from "react";
import { Textarea } from "@mui/joy";

interface IdiomFieldProps {
    value: string;
    onChange: (value: string) => void;
    required: boolean;
}

interface IdiomFieldState {
    value: string;
}

class IdiomField extends React.Component<IdiomFieldProps, IdiomFieldState> {
    constructor(props: IdiomFieldProps) {
        super(props);
        this.state = {
            value: this.props.value || ''
        };
    }

    static getDerivedStateFromProps(nextProps: IdiomFieldProps, prevState: IdiomFieldState) {
        if (nextProps.value !== prevState.value) {
            return { value: nextProps.value };
        }
        return null;
    }

    handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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