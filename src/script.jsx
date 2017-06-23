import React from "react";
import ReactDOM from "react-dom";

var List = require("./components/List.jsx");
// import List from './components/List';

class Screen extends React.Component {
    constructor(props){
        super(props);
        this.state = {items: [], newItemText: ''};
        this.handleSubmit = this.handleSubmit.bind(this);

        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){

    }

    handleSubmit(e) {
        e.preventDefault();
        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText: ""});
    }

    onChange(e) {
        var currentItems = this.state.items;
        this.setState({items: currentItems,newItemText: e.target.value});
    }

    render() {
        return (
            <div className="col-lg-3">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>{this.props.title}</h1>
                </div>

                <div className="panel-body">
                    <form ref="myRef" onSubmit={(e)=>this.handleSubmit(e)} >
                        <div className="input-group">
                            <span className="input-group-addon">Insert:</span>
                            <input className="form-control" onChange={this.onChange} type="text" value={this.state.newItemText}/>
                        </div>
                        <List ingredients={this.state.items} />
                    </form>
                </div>

            </div>
            </div>
        );
    }
}

ReactDOM.render(<Screen title="Ingredients"/>, document.getElementById("render"));