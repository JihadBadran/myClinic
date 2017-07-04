import React from "react";
import Header from "./Header.jsx";

import MainContent from "./MainContent.jsx";


class ApplicationScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            fontSize: 30,
            textTransform: "uppercase"
        }

        return (
            <div>
                <title>Dashboard - {this.props.settings.app_name}</title>
                <Header settings={this.props.settings}/>
                <MainContent />

                { this.props.children }

            </div>
        )
    }
}

export default ApplicationScreen;