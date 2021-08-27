import React from "react";
import home1 from "../img/home1.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          All nature photographers or videographer are welcome to contact us to
          schedule your safari into the wild!
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="photographer taking up close shot of a stag." />
      </div>
    </div>
  );
};
export default AboutSection;
