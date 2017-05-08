import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <img className="img-louie" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/162/154/38f6dc2.jpg" />
        <div className="about-louie">
          <p>
            A long time resident of Las Vegas and with over 15 years of experience in the local real estate market, Louie has
            dedicated himself to providing an excellent experience to clients wishing to purchase or sell a home.
          </p>
        </div>
      </div>
    )
  }
}

export default Profile;
