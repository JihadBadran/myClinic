import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import LoginScreen from "./components/LoginScreen.jsx";
import ApplicationScreen from "./components/ApplicationScreen.jsx";

import {BrowserRouter} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {loggedIn: false, refresh: false, users: [], settings:[]};
        if (this.milliToMinutes((new Date()).getTime() - parseInt(localStorage.getItem("lastLoggedIn"))) < 5)
            this.state.loggedIn = true;

        this.logInHandler = this.logInHandler.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);


    }

    componentDidMount() {
        this.settings = $.get("../api/appsettings.php", function(settings){
            this.setState({settings:settings});
        }.bind(this));
    }


    milliToMinutes(milli) {
        return (milli / 60000);
    }

    logInHandler() {
        console.log(this.state.loggedIn);
        this.setState({loggedIn: true});
        localStorage.setItem("lastLoggedIn", new Date().getTime());
        console.log(localStorage.getItem("lastLoggedIn"));
    }

    handleRefresh() {
        this.setState({refresh: !this.state.refresh});
        console.log(this.state.refresh);
    }

    render() {
        if (this.state.loggedIn)
            return (<ApplicationScreen />);
        else
            return (<LoginScreen settings={this.state.settings} handler={this.logInHandler}/>);
    }
}
// Header = withRouter(Header);


ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById("render"));