import styled from "styled-components";
import { useTodoDispatch,} from "./ContextAPI/TodoContext";
import { BsTrashFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const Checkbox=styled.input`
     width: 20px;
     height: 20px;
     margin: 0 10px;
     border:none;
     &:checked+label{
         background-color:#663a00;
     }
`
const Delete=styled.div`
    width: 15px;
    height:15px;
    color: #adadad;
    opacity: 0;
    &:hover{
        color:#663a00;
    }
`
const ItemBox=styled.tr`
    height:50px;
    &:hover{
        ${Delete}{
            opacity: 1;
        }
    }
    &>td>p{
        padding-left: 10px;
    }
    &>td>s{
        display: block;
        padding-left: 10px;
        margin: 18px 0;
        color:#a7a7a7;
    }
`
const TodoItem=({text, id,complete})=>{
    const dispatch=useTodoDispatch();
    const [checked, setChecked]=useState(complete);

    const onToggle=()=>{
        setChecked(!checked);
        dispatch({type:'Toggle',payload:id});
    }

    useEffect(()=>console.log("Effec!!!"),[checked])
 
    const onDelete=(e)=>{
        dispatch({type:'Delete',payload:id})
    }

    return(
        <ItemBox>
            <td width="10px"><Checkbox 
            type="checkbox"  onChange={onToggle} checked={checked}
            /></td>
            <td>{complete? <s>{text}</s>:<p>{text}</p> }</td>
            <td><Delete onClick={onDelete}><BsTrashFill/></Delete></td>
        </ItemBox>
    )
}

export default TodoItem;