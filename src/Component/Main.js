import React from "react";
import Hoc from "./Hoc";

const Main = (props) => {
    
    return (
        <div>
            <h1>HOC</h1>
             {props.value.name}
        </div>
    )
}

export default Hoc(Main)