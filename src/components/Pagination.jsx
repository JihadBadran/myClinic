import React from "react";
import PaginationItem from "./PaginationItem.jsx";

class Pagination extends React.Component {
    render() {

        var pagination = [];
        for (var j = 1; j <= this.props.totalPages; j++) {
            if (j === this.props.page)
                pagination.push(<PaginationItem index={j} handler={this.props.paginate} key={j} active={true}/>);
            else
                pagination.push(<PaginationItem index={j} handler={this.props.paginate} key={j} active={false}/>);
        }

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    {pagination}
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;

