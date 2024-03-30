// Style
import styled from "styled-components";
// Img
import MrBean from "../assets/MrBean.jpg";

const About = () => {
  return (
    <StyledAbout id="about">
      <AboutContent>
        <AboutText>
          <h3>Hey, it's me! I'm John</h3>
          <p>
            An HTML Email Developer with a comprehensive understanding of email
            design. From translating design mockups into HTML email documents, I
            create original and effective designs that take all project
            deliverables into account. Personal development is very important to
            me, and I'm constantly improving my skills and knowledge to get the
            best results from every campaign.
          </p>
        </AboutText>
        <AboutImg>
          <img src={MrBean} alt="Beans" />
        </AboutImg>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutText = styled.div`
  flex: 1;

  h3 {
    font-size: 2rem;
    color: #4d2a00;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
  }
`;

const AboutImg = styled.div`
  flex: 1;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
