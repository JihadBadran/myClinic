import React from "react";

import PatientsTableRow from "./PatientsTableRow.jsx";
import AddPatientDialog from "./AddPatientDialog.jsx";
import * as $ from "jquery";


class Paginattion extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.handler(this.props.index);
    }

    render() {
        if (this.props.acive)
            return (
                <li className="page-item active">
                    <button onClick={this.onClick} className="page-link">{this.props.index}</button>
                </li>);
        else {
            return (
                <li className="page-item">
                    <button onClick={this.onClick} className="page-link">{this.props.index}</button>
                </li>);
        }
    }
}


class Patients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            newPatientView: false,
            search: "",
            page: 1,
            offset: 5,
            totalCount: 0
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render = this.render.bind(this);
        this.deletePatient = this.deletePatient.bind(this);
        this.paginate = this.paginate.bind(this);
    }


    componentWillMount() {
        this.serverRequest =
            $.get("../api/fetchpatients.php?cret=" + this.state.search + "&number=" + this.state.offset + "&offset=" + ((this.state.page - 1) * this.state.offset),
                function (items) {

                }.bind(this))
                .done(function (items) {
                    this.setState({items: items.records, totalCount: items.count});
                }.bind(this))
                .fail(function () {
                    console.log("../api/fetchpatients.php?cret=" + this.state.search + "&number=" + this.state.offset + "&offset=" + ((this.state.page - 1) * this.state.offset));
                });
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }


    onChange(e) {
        this.setState({search: e.target.value});
    }

    onClick(e) {
        this.serverRequest =
            $.get("../api/fetchpatients.php?cret=" + this.state.search + "&number=" + this.state.offset + "&offset=" + ((this.state.page - 1) * this.state.offset))
                .done(function (items) {
                    if (items.records !== undefined || items.records !== null)
                        this.setState({items: items.records, totalCount: items.count});
                }.bind(this))
                .fail(function () {
                    console.log("empty");
                });
    }

    refresh() {
        this.serverRequest =
            $.get("../api/fetchpatients.php?cret=" + "&number=" + this.state.offset + "&offset=" + ((this.state.page - 1) * this.state.offset))
                .done(function (items) {
                    this.setState({items: items.records, totalCount: items.count});
                }.bind(this))
                .fail(function () {
                    console.log("empty");
                });
    }

    deletePatient(id) {
        $.post("../api/deletepatient.php", {id: id})
            .done(function () {
                this.refresh();
            }.bind(this))
            .fail(function () {

            }.bind(this));
    }

    paginate(number) {
        this.setState({page: number});
        this.refresh();
    }

    render() {

        if (this.state.items.length > 0) {
            var i = 0;
            var items = this.state.items.map(function (item) {
                return (<PatientsTableRow deleteF={this.deletePatient} itemID={item.pid} key={item.pid} item={item}/>);
            }.bind(this));


            var pagination = [];
            for (var j = 1; j <= Math.ceil(this.state.totalCount / this.state.offset); j++) {
                if(j == this.state.page)
                    pagination.push(<Paginattion index={j} handler={this.paginate} key={j} active={true}/>);
                else
                    pagination.push(<Paginattion index={j} handler={this.paginate} key={j} active={false}/>);
            }

            return (
                <div className="box-module">

                    <div className="box-module-head container">
                        <div>
                            <h2 className="h2 text-primary">
                                <span className="fa fa-user-circle-o"/>
                                Patients
                            </h2>
                        </div>
                        <div>
                            <button type="button" data-toggle="modal" data-target="#modal"
                                    className="btn btn-outline-success">
                                Add Patient
                            </button>

                            <div className="form-inline my-2 my-md-0 float-md-right">
                                <input onChange={this.onChange} className="form-control mr-sm-2" type="search"
                                       placeholder={"Search ..."} value={this.state.search}/>
                                <button onClick={this.onClick} type="button"
                                        className="btn btn-outline-success form-control my-2 my-sm-0">
                                    Search
                                </button>
                            </div>

                        </div>

                    </div>

                    <AddPatientDialog refresh={this.refresh}/>

                    <table className="table">
                        <thead className="">
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Gender</td>
                            <td>Blood Group</td>
                            <td className="hidden-xs-down">Marital Status</td>
                            <td>Operations</td>
                        </tr>
                        </thead>

                        <tbody>
                        {items}
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            {pagination}
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>);
        }
        else {
            return (
                <div className="box-module">

                    <div className="box-module-head container">
                        <div>
                            <h2 className="h2 text-primary">
                                <span className="fa fa-user-circle-o"/>
                                Patients
                            </h2>
                        </div>
                        <div>
                            <button type="button" data-toggle="modal" data-target="#modal"
                                    className="btn btn-outline-success">
                                Add Patient
                            </button>

                            <div className="form-inline my-2 my-md-0 float-md-right">
                                <input onChange={this.onChange} className="form-control mr-sm-2" type="search"
                                       placeholder={"Search ..."} value={this.state.search}/>
                                <button onClick={this.onClick} type="button"
                                        className="btn btn-outline-success form-control my-2 my-sm-0">
                                    Search
                                </button>
                            </div>

                        </div>

                    </div>

                    <AddPatientDialog refresh={this.refresh}/>

                    <table className="table">
                        <thead className="">
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Gender</td>
                            <td>Blood Group</td>
                            <td className="hidden-xs-down">Marital Status</td>
                            <td>Operations</td>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td colSpan={6} className="text-center"> 0 RECORDS FOUND!</td>
                        </tr>
                        </tbody>
                    </table>
                </div>);
        }
    }
}

export default Patients;