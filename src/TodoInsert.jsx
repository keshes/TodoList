import { useState} from "react";
import React from "react";
import { useTodoNextId, useTodoDispatch, useTodoState } from "./ContextAPI/TodoContext";

const TodoInsert=()=>{
    const nextId=useTodoNextId();
    const [value, setValue]=useState("");
    const dispatch=useTodoDispatch();
    // const TextInput=useRef();

    const createTodos=(e)=>{
        e.preventDefault();

        const payload={
            id:nextId.current,
            text:value,
            complete:false,
        }
        dispatch({type:'Create', payload:payload});
        setValue("");
        nextId.current+=1;

      }
      
return(
    <thead>
        <tr>
          <th colSpan="2"><input type="text"  placeholder="writing..." value={value} onChange={(e)=>{setValue(e.target.value);}}/></th>
          <th><button onClick={createTodos}>enter</button></th>
        </tr>
    </thead>
)
}

export default TodoInsert