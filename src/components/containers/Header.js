import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <span className="name-plate">LC Alcantara LLC Real Estate</span>
        <div className="contact-plate">
          <span className="phone">Phone: (702) 300 - 3677</span>
          <span className="email">E-Mail: LouieA@RealtyOneLV.com</span>
        </div>
      </div>
    )
  }
}

export default Header;
