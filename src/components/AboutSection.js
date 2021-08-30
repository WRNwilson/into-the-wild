import React from "react";
import home1 from "../img/home1.jpg";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";
import { fade, titleAnim, photoAnim } from "../Animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          All nature photographers or videographer are welcome to contact us to
          schedule your safari into the wild!
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="photographer taking up close shot of a stag."
        />
      </Image>
    </About>
  );
};

//Styled Components

export default AboutSection;
