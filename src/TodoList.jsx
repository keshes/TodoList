import styled from 'styled-components';
import TodoInsert from './TodoInsert';
import TodoItemList from './TodoItemList';

const List=styled.table`
  background: white;
  border-radius:5px;
  margin: 0 auto;
  padding: 0;
  width: 500px;
  border-collapse: collapse;

`
function TodoList(){

    return(
    <List>
        <TodoInsert/>  
        <TodoItemList/>
      </List>
      )

      
}

export default TodoList;