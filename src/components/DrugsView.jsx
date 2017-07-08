import React from "react";
import $ from "jquery";
import DrugsTableRow from "./DrugsTableRow.jsx";
import AddDrugDialog from "./AddDrugDialog.jsx";


class Drugs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {items: [], newDrugView:false};
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }


    componentWillMount(){
        // bring data from PHP API to render it
        this.serverRequest =
            $.get("../api/fetchDrugs.php", function (items) {
                this.setState({items: items.records});
            }.bind(this));
    }


    componentWillUnmount(){
        // abort server request on unMount if requesting
        this.serverRequest.abort();
    }


    render() {
        var i = 0;
        var items = this.state.items.map(function (item) {
            return <DrugsTableRow key={i++} item={item}/>
        });

        return (
            <div className="box-module">

                <div className="box-module-head container">
                    <div>
                        <h2 className="h2 text-primary">Drugs</h2>
                    </div>
                    <button type="button" data-toggle="modal" data-target="#addDrugModal" className="btn btn-outline-success">Add Drug</button>
                </div>

                <AddDrugDialog />

                <table className="table">
                    <thead className="">
                    <tr>
                        <td>#</td>
                        <td>Name</td>
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

export default Drugs;