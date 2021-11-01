

import React,{useState, useEffect} from "react";
// import "./style.css";
import TodoItem from "../TodoItem";

const Todo =()=> {
 
  const [todoarray , settodoarray]= useState ([
    { id: 1, name: "sleep" },
    { id: 2, name: "walk" },
  ])

 

  const createNew = (e) => {
    e.preventDefault(); 
let obj = {
  id: todoarray.length + 1,
  name: e.target.inside.value,
  
}
settodoarray([...todoarray , obj])


      e.target.inside.value = ""; 
  }


  const deletitem=(id)=>{
   
    settodoarray([...todoarray.filter((item) =>  item.id !== id) ]);
  }

  const editeitem=(id)=>{
    const neww= prompt("enter the new todos" ,"newlist");; 
    console.log(neww);
    settodoarray(todoarray.map((item ) => {
      // console.log(id);
      // console.log(item.id);
      if(id === item.id){
        return {...item,name:neww}
      }else{
        return item
      }
    } ))
        console.log(todoarray);
  }
    return (
      <>
        <h1>To Do list</h1>
        <form onSubmit={createNew}>
          <ul>
            {console.log(todoarray)}
            {todoarray.map((item, i) => (
                <TodoItem  todos={item}  key={i} editeitem={editeitem}  deletitem={deletitem}  /> //This  {} is passed as a prop
              ) 
            )}
          </ul>
          <input type="text" name="inside" />
          <button>add </button>
        </form>
      </>
    );
  
            }
export default Todo;


