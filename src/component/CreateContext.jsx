import React from "react";

//create context

const CreateContext = React.createContext("default value")

//create provider = provides value for all decedent component good to place in app.js
//we can pass default value in createcontext method

const ContextProvider = CreateContext.Provider

//create consumer

const ContextConsumer = CreateContext.Consumer

export {ContextProvider, ContextConsumer}