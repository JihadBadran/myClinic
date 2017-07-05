import React from "react";

import PatientsTableRow from "./PatientsTableRow.jsx";
import AddPatientDialog from "./AddPatientDialog.jsx";
import * as $ from "jquery";


class Patients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {items: [], newPatientView: false};
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        this.serverRequest =
            $.get("../api/fetchpatients.php", function (items) {
                this.setState({items: items.records});
            }.bind(this));
    }
    componentWillUnmount(){
        this.serverRequest.abort();
    }

    render() {
        var i = 0;
        var items = this.state.items.map(function (e) {
            return (<PatientsTableRow key={i++} item={e}/>);
        });

        return (
            <div>
                <div className="bg-inverse table-header" style={{padding: 10}}>
                    <button type="button" data-toggle="modal" data-target="#modal" className="btn btn-outline-success">
                        Add Patient
                    </button>
                </div>

                <AddPatientDialog />

                <table className="table">
                    <thead className="">
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Gender</td>
                        <td className="hidden-xs-down">Marital Status</td>
                        <td>Operations</td>
                    </tr>
                    </thead>

                    <tbody>
                    {items}
                    </tbody>
                </table>
            </div>);
    }
}

export default Patients;