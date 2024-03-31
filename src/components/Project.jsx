// Style
import styled from "styled-components";
// Images
import ProjectOne from "../assets/project1.jpeg";

const Project = ({ title, tools, description, image, demo, github }) => {
  return (
    <StyledProject>
      <div className="project-img">
        <img src={image} alt={`Project Image for ${title}`} />
      </div>
      <div className="project-desc">
        <p>{title}</p>
        <StyledTools>
          {tools.map((tool, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tool }} />
          ))}
        </StyledTools>
        <p>{description}</p>
        <div className="buttons">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <button>View Demo</button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button>See GitHub</button>
          </a>
        </div>
      </div>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`
  display: flex;
  align-items: stretch;

  .project-img {
    flex: 1;
    display: flex;
    align-items: stretch;
    height: auto;
    z-index: 2;
    /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); */

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .project-desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    background-color: #f9c04d;
    padding: 1rem;
    /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2); */

    p {
      padding: 0.5rem 0;
      font-size: 1.2rem;
      line-height: 1.5rem;
      padding-bottom: 1rem;
    }

    button {
      background-color: #bff94d;
      color: #874df9;
      font-weight: bold;
      border: none;
      padding: 1rem;
      font-size: 0.9rem;
      width: 100%;
      margin-top: 1rem;
      cursor: pointer;
    }
  }

  /* @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  } */
`;

const StyledTools = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-bottom: 2rem;

  li {
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
`;
