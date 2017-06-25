import React from "react";


class LoginFormInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {text:""};


        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({text:e.target.value});
    }
    render(){
        return (<input className="customInput form-control" placeholder={this.props.placeholder} onChange={this.onChange} value={this.state.text} type={this.props.type} />);
    }
}


class LoginForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return (<div >
            <LoginFormInput placeholder="Username" type="text" value=""/>
            <LoginFormInput placeholder="Password" type="password" value=""/>
            <button className="customInput" onClick={this.props.handler}>Login </button>
        </div>);
    }
}


class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {username:"", password:""};
    }

    render(){
        return (<div>
            <LoginForm  handler={this.props.handler}/>
        </div>);
    }
}

export default Login;