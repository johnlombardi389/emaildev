import styled, { keyframes } from "styled-components";
// Icons
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiSass,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiFigma,
  SiBootstrap,
  SiGit,
  SiDjango,
} from "react-icons/si";
import Mjml from "../assets/mjmlIcon.png";

const jiggleAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(0);
  }
`;

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <div>Hello Skills</div>
      <ul>
        <li>
          <SiJavascript
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />{" "}
          JavaScript
        </li>

        <li>
          <SiCss3 style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />{" "}
          CSS
        </li>

        <li>
          <SiHtml5 style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />{" "}
          HTML
        </li>

        <li>
          <SiReact style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />{" "}
          React
        </li>

        <li>
          <SiPython
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />{" "}
          Python
        </li>

        <li>
          <SiTailwindcss
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />{" "}
          Tailwind CSS
        </li>

        <li>
          <SiSass style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />{" "}
          Sass
        </li>

        <li>
          <SiAdobephotoshop
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />{" "}
          Photoshop
        </li>

        <li>
          <SiAdobeillustrator
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />{" "}
          Illustrator
        </li>

        <li>
          <SiAdobeindesign
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />{" "}
          InDesign
        </li>

        <li>
          <SiFigma style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />{" "}
          Figma
        </li>

        <li>
          <SiBootstrap
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />{" "}
          Bootstrap
        </li>

        <li>
          <SiGit style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />{" "}
          Git
        </li>

        <li>
          <SiDjango
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />{" "}
          Django
        </li>

        <li>
          <img src={Mjml} alt="Mjml Logo" />
          MJML
        </li>
      </ul>
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled.section`
  max-width: 1200px;
  margin: 2rem auto;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    margin: 2rem;

    li {
      padding: 0.5rem 1.25rem;
      border-radius: 1.5rem;
      background-color: #f0f0f0;
      margin: 1rem 1rem;
      position: relative;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      transition: transform 0.2s ease; /* Added transition for smooth effect */

      img {
        width: 1.75rem;
        height: 1.75rem;
        margin-right: 0.5rem;
        padding: 0;
      }

      svg {
        width: 1.75rem;
        height: 1.75rem;
        margin: 0;
      }

      &:hover {
        animation: ${jiggleAnimation} 0.5s ease infinite;
      }
    }
  }
`;
