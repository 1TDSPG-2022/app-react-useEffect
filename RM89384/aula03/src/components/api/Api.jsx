import React from "react";

export default function App(props){
    return(
        <div>
            <h2>Api</h2>
            <div>{props.children[0]}</div>
        </div>
    )
}