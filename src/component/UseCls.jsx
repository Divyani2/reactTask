import React,{Component}from "react";
import StateUp from "./StateUp";
class UseCls extends Component{
    constructor(){
        super()
        this.state ={
            message:"welcome"
        }
    }
   
    changeMessage(){
        this.setState({
            message:"thnx"
        })
    }

    changeMessage2(){
        this.setState({
            message:"see ya"
        })
    }


    render(){
        return (
            <>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()} onMouseOver={()=> this.changeMessage2()}>Click</button>
        </>
        )
    }
}

export default UseCls;