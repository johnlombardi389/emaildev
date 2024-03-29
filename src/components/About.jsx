// Style
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout id="about">
      <AboutText>
        <h3>Hey its me!</h3>
        <p>
          A HTML Email Developer with a comprehensive understanding of email
          design. From translating design mockups into HTML email documents, I
          create original and effective designs that take all project
          deliverables into account. Personal development is very important to
          me and I'm constantly improving my skills and knowledge to get the
          best results from every campaign.
        </p>
      </AboutText>
      <AboutImg>Hello You</AboutImg>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  align-items: stretch;
`;

const AboutText = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch;
  height: auto;
  h3 {
    font-size: 2rem;
    color: #4d2a00;
  }
`;

const AboutImg = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch;
  height: auto;
`;
