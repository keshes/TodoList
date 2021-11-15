import styled from 'styled-components';
import TodoList from './TodoList';
import { createGlobalStyle } from 'styled-components';
import { Provider } from './ContextAPI/TodoContext';




const GlobalStyle = createGlobalStyle`
    
  body {
    background: #eebd12;
  }
  h1{text-align:center}
  table{
    margin: 0 auto;
    padding: 0;
  }
`;

function App() {
  return (
      <Provider>
      <GlobalStyle/>
      <h1>TodoList</h1>
      <TodoList/>
      </Provider>
  );
}



export default App;
