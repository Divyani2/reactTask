import React from "react";
import { useState } from "react";
import UpdatedComponent from "./withHoc";

const HOC = (props) =>{
    const[count,setcount] = useState(0)

    const inc = () => {
        setcount(precCount => precCount+1)
    }

    return(
        <>
        <h1>{count}{props.name}</h1>
        <button onClick={inc}>Click</button>
        </>
    )
}

export default UpdatedComponent(HOC)