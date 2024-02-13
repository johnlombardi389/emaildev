// Style
import styled from "styled-components";
// Images
import ProjectOne from "../assets/project1.jpeg";

const Project = ({ title, description, image }) => {
  return (
    <StyledProject>
      <div className="project-img">
        <img src={image} alt={`Project Image for ${title}`} />
      </div>
      <div className="project-desc">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;

  .project-img {
    width: 300px;
    height: auto;
    z-index: 2;

    img {
      width: 100%;
      height: auto;
    }
  }

  .project-desc {
    width: 600px;
    height: 300px;
    background-color: yellow;
    margin-top: -150px;
    margin-left: -350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    padding: 2rem;

    p {
      padding: 0.5rem 0;
    }
  }
`;
