import React from "react";

class Settings extends React.Component {


    constructor(props) {
        super(props);


    }

    componentWillMount() {
        console.log("Mounting Settings");
    }


    render() {
        return (
            <div>
                <div className="box-module">
                    <div className="box-module-head container">
                        <div>
                            <h2 className="h2 text-primary">Settings</h2>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>
                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-2 col-form-label">Clinic Name</label>
                                <div className="col-10">
                                    <input className="form-control" type="text" value="Artisanal kale"
                                           id="example-text-input"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="form-group row">
                                <label htmlFor="example-color-input" className="col-2 col-form-label">Color</label>
                                <div className="col-10">
                                    <input className="form-control" type="color" value="#563d7c"
                                           id="example-color-input"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>);
    }
}


export default Settings;