import React from "react";
import {BrowserRouter as Router, Link, NavLink, withRouter} from "react-router-dom";


class Header extends React.Component {
    render() {
        return (<header id="sidebar">
            <div className="sidebar col-lg-2 col-sm-3 col-xs-12 hidden-xs-down" data-toggle="collapse" data-parent="#sidebar" aria-expanded="true">
                <div className="row">
                    <div className="col-12">
                        <span className="brand">{this.props.settings.app_name}</span>
                    </div>
                    <div className="col-12 avatar">
                        <div className="col-12">
                            <img className="img-circle"
                                 src="https://image.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg"
                                 alt="avatar" height={"80px"} width={"80px"}/>
                        </div>
                        <div className="col-12">
                            <p className="avatarName " style={{height: 15, margin: 0}}>Jihad Badran</p>
                            <p className="avatarSlogan " style={{color: "#aaa"}}>Doctor</p>
                        </div>
                    </div>

                    <ul className="nav flex-column">

                        <li className="nav-item" >
                            <NavLink className="nav-link" activeClassName="active" exact to={"/"}>
                                <i className="fa fa-user-o" aria-hidden="false"/>
                                &nbsp;Patients
                            </NavLink>
                        </li>

                        <li className="nav-item" >
                            <NavLink exact className="nav-link" to={"/drugs"} activeClassName="active">
                                <i className="fa fa-history" aria-hidden="false"/>
                                &nbsp;Drugs</NavLink>
                        </li>

                        <li className="nav-item" >
                            <NavLink exact className="nav-link" to={"/profile/settings"} activeClassName="active">
                                <i className="fa fa-history" aria-hidden="false"/>
                                &nbsp;Settings</NavLink>
                        </li>
                    </ul>
                </div>
                <p className="copyright-sidebar">Developed by <span className="font-italic">Softpixel</span></p>
            </div>
        </header>);
    }
}
// Header = withRouter(Header);
export default Header;