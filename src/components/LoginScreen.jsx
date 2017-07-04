import React from "react";
import Login from "./Login.jsx";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            fontSize:30,
            textTransform:"uppercase"
        }

        let styleFooterCopy = {
            textAlign:"center",
            color:"gray",
            fontSize:11,
            padding:12
        }
        return (
            <div className="centerInPage col-lg-4 col-sm-6 col-md-6 col-xs-12">
                <title>Dashboard - {this.props.settings.app_name}</title>

                <p className="text-center col-sm-12 " style={style}>{this.props.settings.app_name}</p>
                <Login wrongCred={this.props.wrongCred} loggedin={false} handler={this.props.handler}/>

                <p style={styleFooterCopy}>All rights reserved for Softpixel.ps.</p>
            </div>
        )
    }
}

export default LoginScreen;