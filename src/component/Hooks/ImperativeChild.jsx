import React from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useState } from "react";


//with forward ref take referance from parent component



const ImperativeChild  = forwardRef((props,ref) =>{
    const[toggle, setToggle] = useState(false)
 
    useImperativeHandle(ref, ()=>({
        alterToggle(){
            setToggle(!toggle)
        }
    }))

    return(
        <>
        <button >
            button from child
        </button>
        {toggle && <p>toggle</p>}
        </>
    )
})


export default ImperativeChild