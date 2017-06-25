import React from "react";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import {BrowserRouter, Switch, Route} from "react-router-dom";


class ApplicationScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            fontSize: 30,
            textTransform: "uppercase"
        }

        return (
            <div>
                <Header refreshHandler={this.props.refreshHandler}/>
                <MainContent />
                { this.props.children }

            </div>
        )
    }
}

export default ApplicationScreen;