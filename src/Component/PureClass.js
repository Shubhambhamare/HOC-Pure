import React from "react";

class PureClass extends React.PureComponent{
    render(){
        console.log("Pure Class Component");
        return( 
            <div>
                <h1> Pure Class Component </h1>
                    
                {this.props.name}
            </div>
        )
    }
}

export default PureClass;