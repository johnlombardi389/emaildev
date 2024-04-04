import { useState } from "react";
import styled from "styled-components";
import Project from "./Project";
import projectData from "../data";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const data = projectData();

  const filteredProjects =
    filter === "All" ? data : data.filter((project) => project.tag === filter);

  return (
    <StyledProjects id="projects">
      <h2>John Lombardi Portfolio</h2>
      <FilterOptions>
        <button
          onClick={() => setFilter("All")}
          className={filter === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Transactional")}
          className={filter === "Transactional" ? "active" : ""}
        >
          Transactional
        </button>
        <button
          onClick={() => setFilter("Promotional")}
          className={filter === "Promotional" ? "active" : ""}
        >
          Promotional
        </button>
        <button
          onClick={() => setFilter("Newsletter")}
          className={filter === "Newsletter" ? "active" : ""}
        >
          Newsletter
        </button>
      </FilterOptions>

      <ProjectsGrid>
        {filteredProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </ProjectsGrid>
    </StyledProjects>
  );
};

export default Projects;

const StyledProjects = styled.section`
  max-width: 1200px;
  margin: 3rem auto 5rem;

  h2 {
    font-family: "Signika", sans-serif;
    text-align: center;
    letter-spacing: 0.075rem;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const FilterOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem;
  max-width: 400px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: #333;
    transition: color 0.3s ease;

    @media (max-width: 400px) {
      padding: 0.5rem 0.5rem;
    }

    &:hover {
      color: #555;
    }

    &:focus {
      outline: none;
    }

    &.active {
      color: #ff6600;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  padding: 0rem;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin: 0 2rem;
  }
`;
