import React from "react";

class BreadCrumbs extends React.Component {

    render() {
        var i = 0;
        var crumbs = this.props.breadcrumbs.map(function (e) {
            return (<li key={i++} className="breadcrumb-item"><a href="#">{e}</a></li>)
        });
        console.log(crumbs);
        return (
            <div className="upper-header row">
                <ol className="breadcrumb " style={{borderRadius: 0}}>
                    {crumbs}
                </ol>
            </div>
        )
    }
}

export default BreadCrumbs;