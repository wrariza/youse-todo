import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import { todos } from '../../api/'

const styleBtn = {
  margin: 12,
}

const style = {
  position: 'absolute',
  right: 500,
}


class User extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <ListItem
            style="style"
            leftAvatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPY9sPwcWO28GLfhK9Yc6KEBNbBk-E_bp_vN0PKVXKucb--QJ" />}
        >
        <p>{this.props.name}</p>
        <p>{this.props.username}</p>
        <p>{this.props.email}</p>
        </ListItem>
        <RaisedButton
            containerElement={
              <Link to={`/users/${this.props.id}/todo`}></Link>
            }  
            label="Ver Todo" 
            primary={true} 
            styleBtn={styleBtn} />
        <Divider/>
      </div>
    )
  }

  }


export default User