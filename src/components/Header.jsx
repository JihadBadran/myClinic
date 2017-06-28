import React from "react";
import {BrowserRouter as Router, Link, NavLink, withRouter} from "react-router-dom";


class Header extends React.Component {
    render() {
        return (<header>
            <div className="sidebar col-lg-2 col-sm-3 col-xs-12 hidden-xs-down">
                <div className="row">
                    <div className="col-12">
                        <span className="brand">myClinic</span>
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

                        <li className="nav-item" onClick={this.props.refreshHandler}>
                            <NavLink exact className="nav-link" to={"/drugs"} activeClassName="active">
                                <i className="fa fa-history" aria-hidden="false"/>
                                &nbsp;Drugs</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>);
    }
}
// Header = withRouter(Header);
export default Header;