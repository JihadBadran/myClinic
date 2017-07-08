import React from "react";

class PatientsTableRow extends React.Component {

    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete(){
        var r = confirm("Are you sure you want to Delete " + this.props.item.pname + "?");
        if(r === true){
            alert(this.props.itemID);
            this.props.deleteF(this.props.itemID)
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.item.pid}</td>
                <td>{this.props.item.pname}</td>
                <td>{this.props.item.pgender.toUpperCase()}</td>
                <td>{this.props.item.pbg}</td>
                <td className="hidden-xs-down">{this.props.item.pms.toUpperCase()}</td>
                <td>
                    <button className="btn btn-sm btn-primary">Visit</button>
                    &nbsp;
                    <button onClick={this.onDelete} className="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>);
    }
}

export default PatientsTableRow;