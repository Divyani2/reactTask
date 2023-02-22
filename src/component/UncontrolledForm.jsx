import React from "react";
import { useRef } from "react";

const UncontrolledForm = () => {
  const fname = useRef(null)

  const submit = (e) => {
    e.preventDefault();
    console.log(fname.current.value)
  }

    return(
        <div>
            <form>
                <label>Uncontolled form</label>
                <input type="text" id="name" ref={fname} />
                <button type="submit" onClick={submit}>click</button>
            </form>
        </div>
    )
}

export default UncontrolledForm;