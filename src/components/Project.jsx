// Style
import styled from "styled-components";
// Images
import ProjectOne from "../assets/project1.jpeg";

const Project = ({ title, tools, description, image }) => {
  return (
    <StyledProject>
      <div className="project-img">
        <img src={image} alt={`Project Image for ${title}`} />
      </div>
      <div className="project-desc">
        <p>{title}</p>
        {/* <p>{description}</p> */}

        <StyledTools>
          {tools.map((tool, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tool }} />
          ))}
        </StyledTools>
        <div className="buttons">
          <button>View Email</button>
          <button>See Code</button>
        </div>
      </div>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;

  .project-img {
    width: 100%;
    height: auto;
    z-index: 2;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

    img {
      width: 100%;
      height: auto;
    }
  }

  .project-desc {
    width: 30rem;
    height: 15rem;
    background-color: #f9c04d;
    margin-top: -4rem;
    margin-left: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 1rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

    p {
      padding: 0.5rem 0;
      font-size: 1.2rem;
      line-height: 1.5rem;
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
`;

const StyledTools = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  li {
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
`;
