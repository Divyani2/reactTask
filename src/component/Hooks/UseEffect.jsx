import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

//useeffect takes arrow function as parameter

const UseEffect = () => {
    const[counter, setcounter]= useState(0)
    const[counter2, setcounter2]= useState(0)
    
    //component did mount= first time component loaded(first time its called)
    //component did update = when called again after 
    useEffect(()=>{
      console.log("use effect called =" + counter)
      return(()=>{
        
      }) 
   },[counter])
//to stop unwanted rendering 
    
  
  return (
  <>
    <h1>{counter}</h1>
       <h1>UseEffect hook</h1>
      <button onClick={()=>{setcounter(counter+1)}}>inc on click</button>
      <button onClick={()=>{setcounter2(counter2+1)}}>inc on click2</button>
  </>
  );
};

export default UseEffect;
