import styled from "styled-components";
const TodoItem=({text, id})=>{
    
  const Checkbox=styled.input`
  width: 15px;
  height: 15px;
`
    return(
        <tr >
      <td width="10px"><Checkbox type="checkbox"/></td>
      <td>{text}</td>
      <td><button key={id}>delete</button> </td>
    </tr>
    )
}

export default TodoItem;