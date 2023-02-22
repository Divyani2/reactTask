import React from 'react';
import { ContextConsumer } from './CreateContext';

const Context2 = () => {
  return (
    <>
      <ContextConsumer>{(lastName)=>{
         return <>Divyani {lastName}</>
      }}</ContextConsumer>
    </>
  );
};

export default Context2;
