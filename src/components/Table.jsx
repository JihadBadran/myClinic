import React from "react";
import TableRow from "TableRow.jsx";

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {items: []};

    }
    componentWillMount(){
        this.serverRequest =
            $.get("../api/signin.php", function (items) {
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

export default Table;