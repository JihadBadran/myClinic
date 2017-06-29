import React from "react";

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.pid}</td>
                <td>{this.props.item.pname}</td>
                <td>{this.props.item.pgender}</td>
                <td className="hidden-xs-down">{this.props.item.pms}</td>
                <td>
                    <button className="btn btn-sm btn-primary">Visit</button>
                    &nbsp;
                    <button className="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>);
    }
}

export default TableRow;