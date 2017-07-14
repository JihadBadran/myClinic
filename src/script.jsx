import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import LoginScreen from "./components/LoginScreen.jsx";
import ApplicationScreen from "./components/ApplicationScreen.jsx";

import {BrowserRouter} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {loggedIn: false, users: [], settings: [], wrongCred: false};

        this.logInHandler = this.logInHandler.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }



    componentWillMount() {
        this.settings = $.get("../api/appsettings.php", function (settings) {
            this.setState({settings: settings});
        }.bind(this));

    }

    logInHandler(username, password) {

        $.post("../api/signin.php",
            {
                username: username.getText(),
                password: password.getText()
            }
        ).done(function (data) {

            this.setState({wrongCred: !data.allowed, loggedIn: data.allowed});

        }.bind(this))


    }

    render() {
        // console.log("settings is " + this.state.settings);
        if (this.state.loggedIn)
            return (<ApplicationScreen settings={this.state.settings}/>);
        else
            return (<LoginScreen wrongCred={this.state.wrongCred} settings={this.state.settings}
                                 handler={this.logInHandler}/>);
    }
}
// Header = withRouter(Header);


window.onbeforeunload = function (e) {
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Data will be lost if you quit, Are you sure?';
    }

    // For Safari
    return 'Data will be lost if you quit, Are you sure?';
};

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("render"));