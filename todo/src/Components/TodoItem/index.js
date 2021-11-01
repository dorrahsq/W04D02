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
          <p onClick={()=> props.editeitem(props.todos.id)}> edite</p>
        </li>
      </>
    );
  }

export default TodoItem;

