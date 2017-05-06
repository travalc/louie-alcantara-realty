import React, { Component } from 'react';
import TopSection from './containers/TopSection';
import MainContent from './containers/MainContent';
import BottomSection from './containers/BottomSection';

class App extends Component {
  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <TopSection />
        <MainContent />
        <BottomSection />
      </div>
    )
  }
}

export default App;
