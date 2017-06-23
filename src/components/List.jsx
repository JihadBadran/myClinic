import React from "react";

import ListItem from "./ListItem.jsx";

class List extends React.Component{
    render(){
        var i = 0;
        var listItems = this.props.ingredients.map(function(item){
            return <ListItem key={i++} number={i} ingredient={item} />
        });
        var style = {
            marginTop:10
        }
        return(
            <ul className="list-group" style={style}>
                {listItems}
            </ul>
        );
    }
}

module.exports = List;
// export default List;