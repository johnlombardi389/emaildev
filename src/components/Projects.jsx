// Style
import styled from "styled-components";
// Project Data
import projectData from "../data";
// Components
import Project from "./Project";
// Images
import Rectangles from "../assets/rectangles.svg";

const Projects = () => {
  const data = projectData();

  return (
    <StyledProjects>
      <ProjectsGrid>
        {data.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </ProjectsGrid>
    </StyledProjects>
  );
};

export default Projects;

const StyledProjects = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  padding: 0rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
