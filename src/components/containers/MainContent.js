import React, { Component } from 'react';
import Profile from '../children/Profile';
import Testimonials from '../children/Testimonials';

class MainContent extends Component {
  render() {
    return (
      <div className="MainContent" style={{backgroundColor:'white', width: '100%', height: '1200px'}}>
        <Profile />
        <Testimonials />
      </div>
    )
  }
}

export default MainContent;
