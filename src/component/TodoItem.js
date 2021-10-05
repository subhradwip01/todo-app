import React,{useState} from "react";
import "./TodoItem.css";

const TodoItem=(props)=>{
   const delter=()=>{
      props.onDelete(props.id)
   }
   const cutIT=()=>{
        props.onComplete(props.id);
        return;
     
   }
   const editor=()=>{
     props.onEdit(props.id)
   }
    return (
      <li className="todo-item">
        <span>
          <i
            className="fas fa-check-circle checkmark"
            onClick={cutIT}
            style={{ color: props.completeChecker ? "green" : "black" }}
          ></i>
        </span>
        {/* <input type="checkbox" className="checkmark" onClick={cutIT}></input> */}
        <span
          className="item-text"
          style={{
            textDecoration: props.completeChecker ? "line-through" : "none",
          }}
        >
          {props.children}
        </span>
        <span>
          <i className="fas fa-trash-alt delete" onClick={delter}></i>
        </span>
        <span>
          {props.completeChecker ? (
            ""
          ) : (
            <i className="fas fa-edit edit" onClick={editor}></i>
          )}
        </span>
      </li>
    );
}
export default TodoItem;