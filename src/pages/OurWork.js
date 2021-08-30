import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import zebras from "../img/zebras.jpg";
import motherchildElephant from "../img/motherchildElephant.jpg";
import twogiraffes from "../img/twogiraffes.jpg";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../Animation";

const OurWork = () => {
  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Movie>
        <motion.h2 variants={fade}>Zebras</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/zebras">
          <motion.img
            variants={photoAnim}
            src={zebras}
            alt="A dazzle of zebras"
          />
        </Link>
      </Movie>
      <Movie>
        <h2>Mother And Child Elephant</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/motherchildElephant">
          <img src={motherchildElephant} alt="Mother and Child Elephant" />
        </Link>
      </Movie>
      <Movie>
        <h2>Two Giraffes</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/twogiraffes">
          <img src={twogiraffes} alt="Two Giraffes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    /* color: #ebebeb; */
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
