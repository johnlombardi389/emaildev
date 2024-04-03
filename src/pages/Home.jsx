// Components
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

// Style
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../style/animation";

const Home = () => {
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Projects />
      <About />
      <Skills />
      <Contact />
    </motion.main>
  );
};

export default Home;
