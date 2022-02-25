import React from "react";

function HOC (WrappedComponent) {
    
    const Details = () => {
        const name = {name:"hello world"};
        return(
            <div>
            <WrappedComponent value = {name}/>
            </div>
            )
        }
    return Details
}

export default HOC