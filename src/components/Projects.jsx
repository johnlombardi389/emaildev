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
  max-width: 1900px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
`;
