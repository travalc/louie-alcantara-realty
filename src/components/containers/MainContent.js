import React, { Component } from 'react';
import Profile from '../children/Profile';
import Testimonials from '../children/Testimonials';
import Logos from '../children/Logos';

class MainContent extends Component {
  render() {
    return (
      <div className="MainContent" style={{backgroundColor:'white', width: '100%', height: '1200px'}}>
        <Profile />
        <Testimonials />
        <Logos />
      </div>
    )
  }
}

export default MainContent;
