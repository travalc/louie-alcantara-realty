import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <div className="Testimonials">
        <h3>Testimonials</h3>
        <div className="testimonial-one">
          <p>
            <em>
              My wife & I have an exceptionally comfortable experience w/ Louie, a caring knowledgeable agent who communicate w/
              conviction and confidence in all business matters. He provides clear direction and makes timely decisions. We highly recommend him.
            </em>
            <br />
            -Jun Mendiola
          </p>
        </div>
        <div className="testimonial-two">
          <p>
            <em>
              Louie was very attentive to my needs during his handling of my Real estate short sell. He was very concerned with my needs during the entire
              transaction and kept a very close eye on my lender. He was vital in facilitating the very difficult process of a short sell, and made every effort to complete the transaction to my satisfaction. I strongly recommend.
            </em>
            <br />
            -Nick Nieves
          </p>
        </div>
      </div>
    )
  }
}

export default Testimonials;
