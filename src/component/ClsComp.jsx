import React,{Component}from "react";

class ClsComp extends Component{
    render(props){
        return <h1>Hello {this.props.name}</h1>
    }
}

export default ClsComp;

//statefull component