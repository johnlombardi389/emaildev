// Components
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

// Style
import styled from "styled-components";

const Home = () => {
  return (
    <main>
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
