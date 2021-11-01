import React from "react";
import "./style.css";

const TodoItem  =(props)=>{

    return (
      <>
        <li>
          {props.todos.name}
          <span onClick={() => props.deletitem(props.todos.id)}>
            X
          </span>
          <button onClick={()=> props.editeitem(props.todos.id)}> edite</button>
        </li>
      </>
    );
  }

export default TodoItem;

