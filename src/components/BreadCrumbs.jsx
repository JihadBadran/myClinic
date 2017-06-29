import React from "react";

class BreadCrumbs extends React.Component {

    render() {
        var i = 0;
        var crumbs = this.props.breadcrumbs.map(function (e) {
            return (<li key={i++} className="breadcrumb-item"><a href="#">{e}</a></li>)
        });
        console.log(crumbs);
        return (
            <ol className="breadcrumb">
                {crumbs}
            </ol>)
    }
}

export default BreadCrumbs;