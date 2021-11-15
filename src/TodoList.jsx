import styled from 'styled-components';
import { useTodoState } from './ContextAPI/TodoContext';
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemList';

function TodoList(){
  const TodoList=styled.table`
background: white;

`
const state=useTodoState();
console.log(state);

    return(
    <TodoList>
        <TodoInsert/>  
        <TodoItemList/>
      </TodoList>
      )

      
}

export default TodoList;