import React from "react";
import {Route, Switch} from "react-router";

class Dummy2 extends React.Component {
    render() {
        return (<div>Dummy2</div>);
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.age}</td>
                <td className="hidden-xs-down">{this.props.item.dob}</td>
                <td>
                    <button className="btn btn-default">Visit</button>
                    &nbsp;
                    <button className="btn btn-default">Delete</button>
                </td>
            </tr>);
    }
}
class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {items: []};
        for(var i =0; i< 10; i++)
            this.state.items.push({id: i, name: "Jihad", age: 22, dob: "22/7/1995"});
    }

    render() {
        var i = 0;
        var items = this.state.items.map(function (e) {
            return (<TableRow key={i++} item={e}/>);
        });

        return (
            <table className="table table-responsive">
                <thead className="">
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td className="hidden-xs-down">DOB</td>
                    <td>Operations</td>
                </tr>
                </thead>

                <tbody>
                {items}
                </tbody>
            </table>);
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