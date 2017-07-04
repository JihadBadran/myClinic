import React from "react";
import {Route, Switch} from "react-router";

import Patients from "./PatientsView.jsx";
import BreadCrumbs from "./BreadCrumbs.jsx";


class Settings extends React.Component {
    render() {
        return (<div>Settings</div>);
    }
}
class Error extends React.Component {
    render() {
        return (<div>Page Not Found!</div>);
    }
}

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {breadcrumbs: ["Home", "State"]};

    }

    render() {
        let style = {
            top: 0,
            float: "right"
        }

        return (
            <div style={style} className="col-lg-10 col-sm-9 col-xs-12 mainContent">
                <BreadCrumbs  breadcrumbs={this.state.breadcrumbs}/>
                <Switch>
                    <Route exact={true} path="/" component={Patients}/>
                    <Route exact path="/drugs" component={Patients}/>
                    <Route exact path="/profile/settings" component={Settings}/>
                    <Route path="*" component={Error}/>
                </Switch>

            </div>);
    }
}

export default MainContent;