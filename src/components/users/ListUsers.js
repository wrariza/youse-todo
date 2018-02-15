import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import CircularProgress from 'material-ui/CircularProgress'
import { users } from '../../api/'
import  User from './User'
import CreateUser from './CreateUser'

const style = {
    position: 'absolute',
    right: 200,
    left: 100,
}

class UsersList extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            users: [],
            isLoading: true
        }

        this.handleOnAddUser = this.handleOnAddUser.bind(this)
    }

    handleOnAddUser (event) {
        event.preventDefault()
        let countId = this.state.users.length + 1
        let user = {
          id: countId,
          name: event.target.name.value,
          email: event.target.email.value,
          username: event.target.username.value
        }
        this.setState({
           users: this.state.users.concat([user])
        })

        //Reset From
        event.target.name.value = ""
        event.target.email.value = ""
        event.target.username.value = ""

        users.createUser(user)
      }

    componentDidMount() {
        this.getListUsers()
    } 

    getListUsers(){
     users.list()
      .then((users) => {
        this.setState(() => {
          return {
            users,              
            isLoading: false
          }
        })
      })
            
    }

    render() {
        return (
           <div>
                <List style={style}>
                <h2>Creando usurio</h2>
                <CreateUser 
                    onAddUser={ this.handleOnAddUser }
                />
                <h2>Lista de usuarios</h2>
                    {
                        this.state.isLoading ? (
                        <CircularProgress size={80} thickness={5} />
                        ) : (
                        this.state.users.map( (user, index) => {
                            return ( 
                                <User
                                    props={user} {...user} 
                                    key={index} 
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

export default UsersList
