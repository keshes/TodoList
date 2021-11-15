import { useState} from "react";
import React from "react";
import { useTodoNextId, useTodoDispatch, } from "./ContextAPI/TodoContext";
import styled from "styled-components";

const TodoHead=styled.thead`
    &>tr>th{
        background: #663a00;
        height: 45px;
        padding:10px;
        border-radius: 5px 5px 0 0;
    }

    &>tr>th>input{
        width: 100%;
        height: 100%;
        font-size: 1em;
        border-radius: 5px;
        border:none;
        &::placeholder{
            color:#9c733e;
        }
    }
`
const TodoInsert=()=>{
    const nextId=useTodoNextId();
    const [value, setValue]=useState("");
    const dispatch=useTodoDispatch();

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

    const onEnter=(e)=>{
        if(e.code === 'Enter'){
            createTodos(e);
        }
    }
      
return(
    <TodoHead>
        <tr>
          <th colSpan="3">
              <input type="text"  placeholder="writing..." value={value} onKeyDown={onEnter} onChange={(e)=>{setValue(e.target.value);}}/>
              </th>
        </tr>
    </TodoHead>
)
}

export default TodoInsert