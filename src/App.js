import TodoList from './TodoList';
import { createGlobalStyle } from 'styled-components';
import { Provider } from './ContextAPI/TodoContext';




const GlobalStyle = createGlobalStyle`
  body {
    background: #eebd12;
    font-size: 18px;
  }
  h1{
    text-align:center;
    color:#663a00;
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
