import React from "react";
import home1 from "../img/home1.jpg";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 1.2 } },
  };
  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2
              animate={{ opacity: 1, transition: { duration: 2.6 } }}
              initial={{ opacity: 0 }}
            >
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              animate={{ opacity: 1, transition: { duration: 3.8 } }}
              initial={{ opacity: 0 }}
            >
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              animate={{ opacity: 1, transition: { duration: 5 } }}
              initial={{ opacity: 0 }}
            >
              true.
            </motion.h2>
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
