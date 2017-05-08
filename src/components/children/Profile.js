import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <img className="img-louie" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/162/154/38f6dc2.jpg" />
        <div className="about-louie">
          <p>
            A long time resident of Las Vegas and with over 15 years of experience in the local real estate market, Louie has
            dedicated himself to providing an excellent experience to clients wishing to purchase, sell or keep a home. A principled man
            and realtor, you can count on Louie to do what is best for you and your family.
          </p>
        </div>
        <div className="career-highlights">
          <h3>Highlights</h3>
          <ul>
            <li>Foreclosure Alternative Consultant Specialist</li>
            <li>Specialist in short sales since 2007 (95% success rate)</li>
            <li>Excellent working relationships with major banks (Bank of America, Wells Fargo, Chase, Aurora, GMAC, etc.)</li>
            <li>Experience in successfully helping clients to get short sales and loan modifications approved in court mediation proceedings</li>
            <li>Track record in assisting distressed homeowners in retaining home ownership and avoid foreclosure.</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Profile;
