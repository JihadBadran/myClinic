import React from "react";

import TableRow from "./TableRow.jsx";
import AddPatientDialog from "./AddPatientDialog.jsx";
class Patients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {items: [], newPatientView:false};

    }
    componentWillMount(){
        this.serverRequest =
            $.get("../api/fetchpatients.php", function (items) {
                this.setState({items: items.records});
            }.bind(this));

        console.log(this.state.users);
    }
    render() {
        var i = 0;
        var items = this.state.items.map(function (e) {
            return (<TableRow key={i++} item={e}/>);
        });

        return (
        <div>
            <div className="bg-inverse table-header" style={{padding:10}}>
                <button type="button" data-toggle="modal" data-target="#modal" className="btn btn-outline-success">Add Patient</button>
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