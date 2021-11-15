import React, { createContext, useContext, useReducer, useRef } from "react";

const initialTodos=[
    {
    id:0,
    text:"hello?",
    complete: false
    },
    {
    id:1,
    text:"let's todolist~",
    complete: true
    },
];

const reducer =(state, action)=>{
    switch(action.type){
        case 'Create':
             return state.concat(action.payload);
        case 'Toggle':
             return state.map(value=> 
                 action.payload === value.id ? {...value,complete:!value.complete}: value
                );
        case 'Delete':
            return state.filter(value => value.id !== action.payload);
        default: throw new Error("Reducer Error");
    }
}

const StateContext=createContext();
const DispatchContext=createContext();
const NextIDContext=createContext();

export const Provider=({children})=>{
    const [state, dispatch]=useReducer(reducer, initialTodos);
    const nextId=useRef(2);

    return(
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <NextIDContext.Provider value={nextId}>
                    {children}
                </NextIDContext.Provider>
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export const useTodoState=()=>{
    const context=useContext(StateContext);
    if(!context) throw new Error('Cannot find State')
    return context;
}

export const useTodoDispatch=()=>{
    const context=useContext(DispatchContext);
    if(!context) throw new Error('Cannot find Dispatch')
    return context;
}

export const useTodoNextId=()=>{
    const context=useContext(NextIDContext);
    if(!context) throw new Error('Cannot find NextId')
    return context;
}