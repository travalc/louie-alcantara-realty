import React, { Component } from 'react';

class TopSection extends Component {
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
      <div className="TopSection" style={{width: '100%', height: '600px'}}>
        <img className={this.state.classOne} id="FirstImage" src='https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/11666087_803573213090101_7789723145640835776_n.jpg?oh=52bb2e7ae0039698f94c64f87f1a1a75&oe=597534D1' />
        <img className={this.state.classTwo} id="SecondImage" src='http://hoosiers.myxtremetrips.com/sites/default/files/styles/original/public/las_vegas_background.jpg?itok=XYCriK5m' />
        <h1 className={this.state.classOne}>Dad is awesome!</h1>
        <h1 className={this.state.classTwo}>Best dad ever!</h1>
      </div>
    )
  }
}

export default TopSection;
