import React from "react";

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.did}</td>
                <td>{this.props.item.dname}</td>
                <td>{this.props.item.dpass}</td>
                <td className="hidden-xs-down">{this.props.item.dob}</td>
                <td>
                    <button className="btn btn-sm btn-primary">Visit</button>
                    &nbsp;
                    <button className="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>);
    }
}

export default TableRow;