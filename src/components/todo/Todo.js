import React, { Component } from 'react'
import { Link } from "react-router-dom"
import FontIcon from 'material-ui/FontIcon'
import { ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { todos } from '../../api/'

const ListItemStyle = {
    border: 'solid 1px #3fcd9f',
    width: 250,
    align: "center"
}


const iconStyles = {
    width: 250,
    align: "center",
    marginRight: 24,
    cursor: 'pointer',
    alignItems: "center",
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
}

class Todo extends Component {
  constructor(props){
    super(props)

    this.state = {
        completed: props.completed,
        edit: false,
        title: props.title,
        remove: false
    }

    this.check = this.check.bind(this)
    this.edit = this.edit.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.onChangeTodo = this.onChangeTodo.bind(this)
  }

  updateTodoUser(){
      todos.updateTodoUser(this.props)
      .then((todo) => {
        this.setState(() => {
          return {
            todo,              
          }
        })
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
    this.setStateEdit()
    this.updateTodoUser()
  }

  delete(e){
    /* Inplemetación con servicio  */
    // todos.removeTodoUser(this.props)
    //   .then((todo) => {
    //     this.setState(() => {
    //       remove: true
    //     })
    //   })
    this.setState({
      remove: true
    })
  }

  onChangeTodo(e){
    console.log(e.target.value)
    let title = e.target.value
    this.setState({
      title: title
    })
  }

  render(){
    return (
      <div>
        { this.state.remove === false && 
          <ListItem   
          style={ListItemStyle} 
          leftCheckbox={
              <Checkbox
                  onClick={this.check} 
                  checked={this.state.completed}
              />
          }>
          { this.state.edit  === false ? 
              this.state.title :
              <form onSubmit={this.props.onEditTodo}>
                <TextField
                    onChange={this.onChangeTodo}
                    defaultValue={this.state.title}
                    floatingLabelText="Editando TASK"
                />
              </form>
          }
        </ListItem>
        }
         { this.state.remove === false && 
            <section 
              className="contentIcons" 
              style={iconStyles}>
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
          }       
      </div>
    )
  }

}
  

export default Todo