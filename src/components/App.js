import React, { Component } from 'react';
import Header from './containers/Header';
import Slideshow from './containers/Slideshow';
import MainContent from './containers/MainContent';

class App extends Component {
  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <Header />
        <Slideshow />
        <MainContent />
      </div>
    )
  }
}

export default App;
