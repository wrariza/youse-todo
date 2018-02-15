import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import CircularProgress from 'material-ui/CircularProgress'
import CreateTodo from './CreateTodo'
import { todos } from '../../api/'
import  Todo from './Todo'


const style = {
    position: 'absolute',
    left: 20,
    borderRadius: 10
}

class TodoList extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            todos: [],
            isLoading: true,
        }
        
        this.handleOnAddTodo = this.handleOnAddTodo.bind(this)
    }
    
    componentDidMount() {
        this.getTodosUser()
    }

    handleOnAddTodo (event) {
        event.preventDefault()
        if(event.target[0].value === "") return 
        let countId = this.state.todos.length + 1
        let todo = {
          id: countId,
          title: event.target[0].value,
          completed: false,
          edit: false
        }
        this.setState({
           todos: this.state.todos.concat([todo])
        })

        event.target[0].value = ""

        /* No se pueden implementar por limitaciones de la api
        Si hubiera una respuesta del servicios este es que se
        Agregaria al estado de la app  
        todos.createTodoUser(todo) */
      }
    
    getTodosUser(){
        todos.getTodosUser(1)
        .then((todos) => {
            this.setState(() => {
            return {
                todos,              
                isLoading: false,
                userId: todos[0].userId
            }
            })
        })      
    }

    render() {
        return (
           <div>
                <List style={style}>
                <h2>Lista de tareas</h2>
                    <CreateTodo 
                        onAddTodo={ this.handleOnAddTodo }
                    />
                    {
                        this.state.isLoading ? (
                        <CircularProgress size={80} thickness={5} />
                        ) : (
                            this.state.todos.map( todo => {
                                return ( 
                                    <Todo 
                                        props={todo} {...todo} 
                                        key={todo.id}
                                        onEditTodo={this.handleOnEditTodo}
                                    />
                                )
                            })
                        )
                    }
                </List>
           </div>
        )
    }
}

export default TodoList
