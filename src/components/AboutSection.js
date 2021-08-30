import React from "react";
import home1 from "../img/home1.jpg";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
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
