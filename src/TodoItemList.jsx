import React from "react";
import { useTodoState } from "./ContextAPI/TodoContext";
import TodoItem from "./TodoItem";

const TodoItemList = () => {
  const state = useTodoState();
  return (
    <tbody>
      {state.map((todo, index) => {
        console.log(todo);
        const { text, id, complete } = todo;
        return <TodoItem key={index} id={id} text={text} complete={complete} />;
      })}
    </tbody>
  );
};

export default TodoItemList;
