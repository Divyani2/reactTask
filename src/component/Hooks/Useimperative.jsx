import React from "react";
import { useRef } from "react";
import ImperativeChild from "./ImperativeChild";

//when u want to use state maintained in child component uses useref hook 

const Useimperative = () => {

    const Bref = useRef(null)

    return(
        <>
        <button onClick={()=>{Bref.current.alterToggle()}}>button from parent</button>
        <ImperativeChild ref={Bref}/>
        </>
    )
}

export default Useimperative