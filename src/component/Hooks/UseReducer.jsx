import React from "react";
import { useReducer } from "react";

//replacement or alternative for usestate()
//whenever we chng anytging in state dispatch function is called
const reducer = (state, action) => {
  switch (action.type) {
    case "Inc":
        return {count: state.count+1, showText:state.showText}
     case "toggleText":
        return {count:state.count, showText: !state.showText}
    default:
        break;
  }
}

const UseReducer = () =>{
const[state, dispatch] = useReducer(reducer, {count:0, showText:true})
return(
    <>
    <h1>hookReducer</h1>
    <h1>{state.count}</h1>
    <h1>{state.showText && <p>text toggle</p>}</h1>
    <button onClick={()=>{
     dispatch({type:"Inc"});
     dispatch({type:"toggleText"})
    }}>click</button>
    </>
)
}

export default UseReducer; 