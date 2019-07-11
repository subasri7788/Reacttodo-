import React from 'react';
class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Item:''
        }
    }
    handleChange(input){
        this.setState({
            Item:input
        })
    }
    handleSubmit=()=>{
        
        this.props.addTodo(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Item</label>
                    <input type='text'onChange={(e)=>this.handleChange(e.target.value)}value={this.state.Item}/>
                </form>
            </div>
        );
    }
}
export default AddTodo;