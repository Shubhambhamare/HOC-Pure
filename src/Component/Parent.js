import React,{Component} from "react";
import PureClass from "./PureClass";
import PureFun from "./PureFun";

class Parent extends Component {
    constructor(){
        super()
        this.state = {
            name:"A"
        }
    }

    componentDidMount () {
        setInterval(() => {
            this.setState({
                name:"B"
            })
        }, 2000);
    }

    render(){
        return(
            <div>
                <PureClass name={this.state.name}/>
                <PureFun name={this.state.name}/>
            </div>
        )
    }
}

export default Parent