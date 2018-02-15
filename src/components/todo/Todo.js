import React, { Component } from 'react'
import { Link } from "react-router-dom"
import FontIcon from 'material-ui/FontIcon';
import { ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { todos } from '../../api/'

const ListItemStyle = {
    border: 'solid 1px gray',
    width: 500,
    align: "center"
}

const iconStyles = {
    width: 500,
    align: "center",
    marginRight: 24,
    cursor: 'pointer',
    alignItems: "center",
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
}

const completedTodo = {
    textDecoration: 'line-through'
}
  

class Todo extends Component {
  constructor(props){
    super(props)

    this.state = {
        props,
        completed: props.completed,
        edit: false
    }

    this.check = this.check.bind(this)
    this.edit = this.edit.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  updateTodoUser(){
      todos.updateTodoUser(this.props)
      .then((todo) => {
        this.setState(() => {
          return {
            todo,              
          }
        });
      })
  }

  setStateEdit(){
    this.setState(prevState => ({
        edit: !prevState.edit
    }))
  }

  edit(e){
    console.log(e) 
    this.setStateEdit()
  }

  check(e){
    console.log(e) 
    this.setState(prevState => ({
        completed: !prevState.completed
    }))
  }

  update(e){
    console.log(e) 
    this.setStateEdit()
    this.updateTodoUser()
  }

  delete(e){
    this.remove()
  }

  render(){
    return (
      <div>
        <ListItem   
         style={ListItemStyle}
         leftCheckbox={
            <Checkbox
                onClick={this.check} 
                checked={this.state.completed}
            />
        }>
        { this.state.edit  === false ? 
            this.props.title :
            <form onSubmit={this.props.onEditTodo}>
              <TextField
                  defaultValue={this.props.title}
                  floatingLabelText="Editando TASK"
              />
            </form>
        }
        </ListItem>
         <section className="contentIcons" style={iconStyles}>
         { this.state.edit && 
            <i 
                onClick={this.update} 
                className="material-icons">save</i>
         }
            <i 
                onClick={this.edit} 
                className="material-icons">edit</i>  
            <i 
                onClick={this.delete} 
                className="material-icons">delete</i>    
        </section>
      </div>
    )
  }

}
  

export default Todo