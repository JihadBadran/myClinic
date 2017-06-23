import React from "react";

class ListItem extends React.Component{
    render(){
        var name = this.props.ingredient.charAt(0).toUpperCase()+this.props.ingredient.slice(1);
        return (
            <li className="list-group-item">{ this.props.number + ": "+ name}</li>
        );
    }
}

module.exports = ListItem;
// export default ListItem;