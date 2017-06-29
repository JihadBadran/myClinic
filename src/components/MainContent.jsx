import React from "react";
import {Route, Switch} from "react-router";

import Table from "Table.jsx";
import BreadCrumbs from "BreadCrumbs.jsx";


class Dummy2 extends React.Component {
    render() {
        return (<div>Dummy2</div>);
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
                <BreadCrumbs breadcrumbs={this.state.breadcrumbs}/>

                    <Switch>
                        <Route exact={true} path="/" component={Table }/>
                        <Route exact path="/drugs" component={Dummy2}/>
                    </Switch>

            </div>);
    }
}

export default MainContent;