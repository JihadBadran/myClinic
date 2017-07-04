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



class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.usernameInput = null;
        this.passwordInput = null;
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        // this.usernameInput.focus();
    }

    render() {
        if (this.props.wc) {
            return (<div >
                <div className="alertCustom" role="alert">
                    <strong>Wrong Username or Password</strong>, Enter Valid Info.
                </div>
                <LoginFormInput ref={(input) => {
                    this.usernameInput = input;
                }} placeholder="Username" type="text" value="" />
                <LoginFormInput ref={(input) => {
                    this.passwordInput = input;
                }} placeholder="Password" type="password" value=""/>
                <button className="customInput"
                        onClick={(e) => this.props.handler(this.usernameInput, this.passwordInput)}>Login
                </button>
            </div>);
        } else {
            return (<div >
                <LoginFormInput ref={(input) => {
                    this.usernameInput = input;
                }} placeholder="Username" type="text" value=""/>
                <LoginFormInput ref={(input) => {
                    this.passwordInput = input;
                }} placeholder="Password" type="password" value=""/>
                <button className="customInput"
                        onClick={(e) => this.props.handler(this.usernameInput, this.passwordInput)}>Login
                </button>
            </div>);
        }
    }
}


class Login
    extends React
        .Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <LoginForm wc={this.props.wrongCred} handler={this.props.handler}/>
        </div>);
    }
}

export default Login;