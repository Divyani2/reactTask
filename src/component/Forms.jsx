import React from "react";
import { useState } from "react";

const Forms = () => {
     
        const[name, setName] = useState("")
       
        const inputValue = (e) => {
               setName(e.target.value)
        }
       
        const submit = (e) => {
          setName(e.target.value)
        }

        return(

            <>
                <h1>{name}</h1><br/>
                <form>
                    <label>Name</label>
                    <input name="name" value={name} onChange={inputValue}/>
                    <button type="submit" onClick={submit}>Click</button>
                </form>
            </>
        )
   
}

export default Forms;