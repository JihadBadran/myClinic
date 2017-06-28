import React from "react";
import {Route, Switch} from "react-router";

class Dummy2 extends React.Component {
    render() {
        return (<div>Dummy2</div>);
    }
}




class BreadCrumbs extends React.Component {

    render() {
        var i = 0;
        var crumbs = this.props.breadcrumbs.map(function (e) {
            return (<li key={i++} className="breadcrumb-item"><a href="#">{e}</a></li>)
        });
        console.log(crumbs);
        return (
            <ol className="breadcrumb">
                {crumbs}
            </ol>)
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