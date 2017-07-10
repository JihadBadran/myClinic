import React from "react";

class AddPatientDialog extends React.Component {


    constructor(props) {
        super(props);
        this.state = {fullname: "", nid: "", phone: "", bg: "A+", gender: "Male"};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameOnChange = this.nameOnChange.bind(this);
        this.nationalIDOnChange = this.nationalIDOnChange.bind(this);
        this.phoneOnChange = this.phoneOnChange.bind(this);
        this.bgOnChange = this.bgOnChange.bind(this);
        this.genderOnChange = this.genderOnChange.bind(this);
        this.resetState = this.resetState.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    nameOnChange(e) {
        this.setState({fullname: e.target.value});
    }

    nationalIDOnChange(e) {
        this.setState({nid: e.target.value});
    }

    phoneOnChange(e) {
        this.setState({phone: e.target.value});
    }

    bgOnChange(e) {
        var select = e.target;
        this.setState({bg: select.options[select.selectedIndex].value});
    }

    genderOnChange(e) {
        var select = e.target;
        this.setState({gender: select.options[select.selectedIndex].value});
    }

    resetState() {
        this.setState({fullname: "", nid: "", phone: "", bg: "A+", gender: "Male"});
    }

    notifyMe() {

        if (("Notification" in window)) {
            if (Notification.permission === "granted") {
                // If it's okay let's create a notification
                var notification = new Notification("Patient Have been Successfully Created!");
            }
            else if (Notification.permission !== "denied") {
                Notification.requestPermission(function (permission) {
                    // If the user accepts, let's create a notification
                    if (permission === "granted") {
                        var notification = new Notification("Patient Have been Successfully Created!");
                    }
                });
            }
        }
    }

    resetState(){
        this.setState({fullname: "", nid: "", phone: "", bg: "A+", gender: "Male"});
    }

    handleSubmit() {
        if (this.state.name !== "" && this.state.nid !== "")
            $.post("../api/pushpatient.php", {
                name: this.state.fullname,
                id: this.state.nid,
                phone: this.state.phone,
                blood: this.state.bg,
                gender: this.state.gender
            })
                .done(function () {
                    this.props.refresh();
                    this.notifyMe();
                    this.resetState();
                }.bind(this))
                .fail(function () {

                }.bind(this));

    }

    render() {
        return (
            <div className="modal fade " id="modal" tabIndex="-1" role="dialog" aria-labelledby="modal"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{color: "black"}}>New Patient</h5>
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body" style={{color: "#333"}}>


                            <div className="form-group">
                                <label >Full Name</label>

                                <input onChange={this.nameOnChange} type="text" value={this.state.fullname}
                                       className="form-control" id=""
                                       aria-describedby="emailHelp" placeholder="Enter patient's full name"/>
                            </div>


                            <div className="row">
                                <div className="form-group col-6">
                                    <label >National ID</label>
                                    <input onChange={this.nationalIDOnChange} value={this.state.nid} type="text"
                                           placeholder="ID Number" className="form-control"/>
                                </div>

                                <div className="form-group col-6">
                                    <label >Phone Number</label>
                                    <input onChange={this.phoneOnChange} value={this.state.phone} type="text"
                                           placeholder="Phone Number" className="form-control"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-6">
                                    <label >Blood Group</label>
                                    <select onChange={this.bgOnChange} className="form-control">
                                        <option value={"A+"}>A+</option>
                                        <option value={"A-"}>A-</option>
                                        <option value={"B+"}>B+</option>
                                        <option value={"B-"}>B-</option>
                                        <option value={"AB+"}>AB+</option>
                                        <option value={"AB-"}>AB-</option>
                                        <option value={"O+"}>O+</option>
                                        <option value={"O-"}>O-</option>
                                    </select>
                                </div>

                                <div className="form-check col-6">
                                    <label >Gender</label>
                                    <select onChange={this.genderOnChange} className="form-control">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>


                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


export default AddPatientDialog;