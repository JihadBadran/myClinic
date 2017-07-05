import React from "react";

class LoginFormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
        this.onChange = this.onChange.bind(this);
        this.getText = this.getText.bind(this);

        this.inputText = null;
    }

    onChange(e) {
        this.setState({text: e.target.value});
    }

    getText() {
        return this.state.text;
    }

    render() {
        return (<input className="customInput form-control" placeholder={this.props.placeholder}
                       onChange={this.onChange} value={this.state.text} type={this.props.type}/>);
    }
}

export default LoginFormInput;