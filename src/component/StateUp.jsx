//passing state as prop to other component

import React from "react";
import { Component } from "react";

class StateUp extends Component{
    constructor(){
        super()
        this.state={
            msg2 : "stateup"
        }
    }
    render(){
        return (
        <h1>{this.state.msg2}</h1>
        )
    }
}

export default StateUp;