import React from "react";
import { Component } from "react";

class ReadableRow extends Component{
    render(data){
        return(
            <div>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
            </div>
        )
    }
}

export default ReadableRow;