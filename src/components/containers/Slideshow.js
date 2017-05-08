import React, { Component } from 'react';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: "FirstImage",
      classOne: 'img-loaded',
      classTwo: 'image',
      classThree: 'image'
    }
    this.imageChange = this.imageChange.bind(this);
  }

  imageChange() {
    if (this.state.currentImage === "FirstImage") {
      this.setState({
        currentImage: "SecondImage",
        classOne: 'image',
        classTwo: 'img-loaded',
        classThree: 'image'
      });
    }
    else if (this.state.currentImage === "SecondImage"){
      this.setState({
        currentImage: "ThirdImage",
        classOne: 'image',
        classTwo: 'image',
        classThree: 'img-loaded'
      });
    }
    else if (this.state.currentImage === "ThirdImage") {
      this.setState({
        currentImage: "FirstImage",
        classOne: 'img-loaded',
        classTwo: 'image',
        classThree: 'image'
      });
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.imageChange, 6000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state.currentBackground);
    return (
      <div className="Slideshow" style={{width: '100%', height: '650px'}}>
        <img className={this.state.classOne} id="FirstImage" src='http://www.thewallofchampions.com/wp-content/uploads/2013/04/2101.jpg' />
        <img className={this.state.classTwo} id="SecondImage" src="http://www.davidmarquardtphotography.com/dm-old/wp-content/uploads/2011/11/Residential-Exterior-1.jpg" />
        <img className={this.state.classThree} id="ThirdImage" src='https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAsEAAAAJDU4MThhMTdiLTIxY2QtNGY3Ni1iMzI1LTVlN2Y1OWExMGJkMA.jpg' />
      </div>
    )
  }
}

export default Slideshow;
