import React from "react";

class DrugsTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.did}</td>
                <td>{this.props.item.dname}</td>
                <td>
                    <button className="btn btn-sm btn-primary">Visit</button>
                    &nbsp;
                    <button className="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>);
    }
}

export default DrugsTableRow;