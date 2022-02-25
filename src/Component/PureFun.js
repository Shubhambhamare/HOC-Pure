import React, {memo} from "react";

const PureFun = (props) => {
    console.log("Pure Functional Component");
    return(
        <div>
            <h1>Pure Functional Component</h1>
             {props.name}
        </div>
    )
}

export default memo(PureFun)