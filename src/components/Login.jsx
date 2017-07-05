import React from "react";
import LoginFormInput from "./LoginFormInput.jsx";





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