import React from "react";
import ReactDOM from "react-dom";

import LoginScreen from "./components/LoginScreen.jsx";
import ApplicationScreen from "./components/ApplicationScreen.jsx";

import {BrowserRouter} from "react-router-dom";

class App extends React.Component {
    constructor(props){
        super(props);

        if( this.milliToMinutes( (new Date()).getTime() - parseInt(localStorage.getItem("lastLoggedIn"))) < 5 )
            this.state = {loggedIn:true, refresh:false};
        else
            this.state = {loggedIn:false, refresh:false};

        this.logInHandler = this.logInHandler.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
    }
    milliToMinutes(milli){
        return (milli/60000);
    }
    logInHandler(){
        console.log(this.state.loggedIn);
        this.setState({loggedIn:true});
        localStorage.setItem("lastLoggedIn", new Date().getTime());
        console.log(localStorage.getItem("lastLoggedIn"));
    }

    handleRefresh(){
        this.setState({refresh:!this.state.refresh});
        console.log(this.state.refresh);
    }
    render() {

        if(this.state.loggedIn)
            return(<ApplicationScreen refreshHandler={this.handleRefresh}/>);
        else
            return(<LoginScreen handler={this.logInHandler} />);
    }
}
// Header = withRouter(Header);


ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById("render"));