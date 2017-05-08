import React, { Component } from 'react';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: "FirstImage",
      classOne: 'img-loaded',
      classTwo: 'image'
    }
    this.imageChange = this.imageChange.bind(this);
  }

  imageChange() {
    if (this.state.currentImage === "FirstImage") {
      this.setState({
        currentImage: "SecondImage",
        classOne: 'image',
        classTwo: 'img-loaded'
      });
    }
    else {
      this.setState({
        currentImage: "FirstImage",
        classOne: 'img-loaded',
        classTwo: 'image'
      });
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.imageChange, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state.currentBackground);
    return (
      <div className="MainContent" style={{width: '100%', height: '600px'}}>
        <img className={this.state.classOne} id="FirstImage" src='http://www.thewallofchampions.com/wp-content/uploads/2013/04/2101.jpg' />
        <img className={this.state.classTwo} id="SecondImage" src='http://wall--art.com/wp-content/uploads/2014/09/las-vegas-skyline-high-resolution.jpg' />
      </div>
    )
  }
}

export default MainContent;
