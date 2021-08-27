import React from "react";
import home1 from "../img/home1.jpg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          All nature photographers or videographer are welcome to contact us to
          schedule your safari into the wild!
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="photographer taking up close shot of a stag." />
      </Image>
    </About>
  );
};

//Styled Components

export default AboutSection;
