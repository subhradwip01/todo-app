import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem"

const TodoList=(props)=>{
    return (
      <div className="todo-list">
        <ul>
          {props.todoItems.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              onDelete={props.onDelete}
              onComplete={props.onComplete}
              onEdit={props.onEdit}
              completeChecker={item.done}
            >
              {item.text}
            </TodoItem>
          ))}
        </ul>
      </div>
    );
}

export default TodoList;