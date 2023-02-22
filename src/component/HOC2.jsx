import React from "react";
import { useState } from "react";
import UpdatedComponent from "./withHoc";

const HOC2 = () =>{
    const[count,setcount] = useState(0)

    const inc = () => {
        setcount(precCount => precCount+1)
    }

    return(
        <>
        <h1>{count}</h1>
        <button onMouseOver={inc}>Click</button>
        </>
    )
}

export default UpdatedComponent(HOC2)