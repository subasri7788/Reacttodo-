import React from 'react';
const DeleteTodo=({deleteTodo,Todos})=>{
   const todos=Todos.length?(
           Todos.map(todo=>{
               return(
                   <ul> key={todo.Id}>
                       <li onClick={()=>deleteTodo(todo.Id)}>{todo.Item}</li>
                   </ul>
               )
           })
       ):(
           <p>Enter to add</p>
       )
   return(
<div>{todos}</div>
   )
      
    }

export default DeleteTodo;