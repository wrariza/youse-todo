import React, { Component } from'react'
import { Link } from "react-router-dom"
import FontIcon from 'material-ui/FontIcon'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'

const usersIcon = <FontIcon className="material">TODO IS</FontIcon>;

class Navigation extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
      <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
          containerElement={<Link to='/users/list'></Link>} 
          icon={usersIcon}
          onClick={() => this.select(0)}
        >
        </BottomNavigationItem>
      </BottomNavigation>
      </Paper>
    );
  }
}

export default Navigation