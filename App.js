import React from 'react';
/*import AddTodo from './AddTodo';
import DeleteTodo from './DeleteTodo';*/

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
      todolist:[]
    
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    this.setState({
      todolist:json.title
    })
  })
  }

  /*addTodo(todo){
    todo.Id=Math.random()*10;
    let todos=[...this.state.todolist,todo];
    this.setState({
   todolist:todos
    });
  }

    deleteTodo(id){
      let todos=this.state.todolist.filter(item=>{
        return item.Id!==id
      })
      this.setState({
        todolist:todos
      })
    }*/
    
  
  render(){
  return (
   <div className="App">
     <h3>Honey-can-do</h3>
     <p>{this.state.todolist}</p>
    </div>
  );
}
}
export default App;
