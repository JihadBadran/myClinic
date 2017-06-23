import React from "react";
import ReactDOM from "react-dom";

var List = require("./components/List.jsx");
var Login = require("./components/Login.jsx");
import {Router, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom"

class Screen extends React.Component{
    constructor(props){
        super(props);
        this.state = {loggedin:false};
        this.loginHandler = this.loginHandler.bind(this);

    }
    loginHandler(){
        console.log(this.state.loggedIn);

        this.setState({loggedIn:true});
    }

    render(){
        if(!this.state.loggedIn)
            return (<div className="centerInPage col-lg-4 col-sm-6 col-md-6 col-xs-12" >
                <Login loggedin={false} handler={this.loginHandler}/>
            </div>)
        else{
            return (<div>
                <h1>Welcome Abroad!!</h1>
            </div>);
        }
    }
}

class Screen2 extends React.Component{
    render(){

        return (<div>
            <h1>Welcome Abroad!!</h1>
        </div>);

    }
}
<Switch>
    <Route exact path='/' component={Screen}/>
    <Route path='/roster' component={Screen2}/>
</Switch>

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Screen}/>
    </BrowserRouter>
    , document.getElementById("render"));