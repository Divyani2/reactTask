import React from 'react';
import { Component } from 'react';

class Conditional extends Component {
  constructor() {
    super();
    this.state = {
      isLog: false,
    };
  }

  render() {
    //if else
    /*if(this.state.isLog){
                        return <div>welcome</div>
                    } else{
                        return <div>Please login</div>
                    }}*/
    
            
    //ternary
    //return this.state.isLog ? <div>welcome</div> : <div>please login</div>;

    //shortcircuit
    /*return(
        (this.state.isLog) && (<h1>Hey</h1>)
    )*/

    //element
      let msg
      if(this.state.isLog){
         msg= "hi"
    } else{
         msg = "Please login"
    }
    return <div>{msg}</div>
  }
}

export default Conditional;
