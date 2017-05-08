import React, { Component } from 'react';
import Profile from '../children/Profile'

class MainContent extends Component {
  render() {
    return (
      <div className="MainContent" style={{backgroundColor:'white', width: '100%', height: '800px'}}>
        <Profile />
      </div>
    )
  }
}

export default MainContent;
