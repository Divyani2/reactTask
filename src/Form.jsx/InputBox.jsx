import React from "react";

const InputBox = (props) =>{
    return(
        <>
          <label>{props.label}</label>
          <input id={props.id} type="text" name={props.name} value={props.value} onChange={(e)=> props.onChange(e)}/>
        </>
    )
}

export default InputBox;