import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 12,
}

class UserForm extends Component{
    
    render(){
      return ( 
        <form onSubmit={this.props.onAddUser}>
           <br/>
                <TextField
                    require='true'
                    name='name'
                    fullWidth={true}
                    floatingLabelText='Nombre'
                /><br/>
                <TextField
                    require={true}
                    name='email'
                    type='email'
                    fullWidth={true}
                    floatingLabelText='Email'
                /><br/>
                <TextField
                    require={true}
                    name='username'
                    fullWidth={true}
                    floatingLabelText='Usuario'
                /><br/>
                <RaisedButton 
                    onClick={this.props.onSubmit}
                    label='Crear usuario'
                    type='submit'
                    color="primary"
                    style={style} 
                />
        </form>
      );
    }
  }


  export default UserForm