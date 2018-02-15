import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 12,
}

class TodoForm extends Component{
    
    render(){
      return ( 
        <form onSubmit={this.props.onAddTodo}>
           <br/>
                <TextField
                    name='title'
                    floatingLabelText='Tarea'
                /><br/>
                <RaisedButton 
                    onClick={this.props.onSubmit}
                    label='Crear todo'
                    type='submit'
                    color="primary"
                    style={style} 
                />
        </form>
      );
    }
  }

  export default TodoForm