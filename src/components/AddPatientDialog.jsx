import React from "react";


class AddPatientDialog extends React.Component {

    constructor(props) {
        super(props);

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
                                <input type="text" className="form-control" id=""
                                       aria-describedby="emailHelp" placeholder="Enter patient's full name"/>
                            </div>

                            <div className="form-check">
                                <label >Gender</label>
                                <select className="form-control">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


export default AddPatientDialog;