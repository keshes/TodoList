import React from "react";
import styled from "styled-components";
import { useTodoState } from "./ContextAPI/TodoContext";
import TodoItem from "./TodoItem";
const TodoItemList=()=>{
  const Checkbox=styled.input`
    width: 15px;
    height: 15px;
  `
  const state=useTodoState();
return(
  <tbody>
    {state.map(todo=>{
      const {text, id}= todo;
      return <TodoItem id={id} text={text}/>

    })}
  </tbody>
  )
}

export default TodoItemList;