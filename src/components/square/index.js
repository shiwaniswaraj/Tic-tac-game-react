import React from "react";

function Squareboard(props){
    return(
        <div className="square_board" onClick={props.onClick}>
            <h3>{props.value}</h3>
        </div>
    )
}

export default Squareboard;
