import React from "react";

const UseProp = (props) => {
    return <h1>hello {props.name} {props.lastName}</h1>
}

export default UseProp;

//props are object and used to tranfer value from parent comp to child comp