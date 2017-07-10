import React from "react";

class PaginationItem extends React.Component {



    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.handler(this.props.index);
    }

    render() {
        if (this.props.active)
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

export default PaginationItem;