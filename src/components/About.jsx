import styled from "styled-components";
import AboutGraphic from "../assets/aboutimg.svg";

const About = () => {
  return (
    <StyledAbout id="about">
      <AboutContent>
        <AboutText>
          <h2>Hey, it's me! I'm John</h2>
          <p>
            An HTML Email Developer dedicated to crafting impactful digital
            communication experiences. With a keen eye for detail and a deep
            understanding of email design principles, I specialize in
            transforming design concepts into polished HTML email campaigns.
            Continuous growth is at the core of my professional journey. I am
            committed to honing my skills and learning about the latest trends
            and technologies in email development.
          </p>
          <p>
            Having traversed a diverse career path that blends design and
            coding, I bring a unique perspective to every project. Originally
            trained in product design, I transitioned seamlessly into the world
            of development. Allowing me to easily understand and translate
            design mockups into HTML email documents.
          </p>
        </AboutText>
        <AboutImg>
          <img src={AboutGraphic} alt="Rectangle Logo Graphic" />
        </AboutImg>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.section`
  max-width: 1200px;
  margin: 5rem auto 2rem;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutText = styled.div`
  flex: 2;
  /* padding: 0 2rem; */

  h2 {
    font-family: "Signika", sans-serif;
    font-size: 2rem;
    color: #274555;
    letter-spacing: 0.075rem;
    margin-top: 5rem;
    margin-bottom: 1rem;
    padding-left: 0;
    padding-right: 2rem;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin-top: 1rem;
    padding-left: 0;
    padding-right: 2rem;
  }

  @media (max-width: 1200px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const AboutImg = styled.div`
  flex: 1;
  text-align: right;

  img {
    max-width: 100%;
    height: auto;
    max-height: 400px;
    margin-top: 5rem;
    padding-left: 0;
    padding-right: 2rem;

    @media (max-width: 768px) {
      margin-top: 2rem;
      padding-right: 0;
    }
  }

  @media (max-width: 768px) {
    /* width: 80%; */
    display: none;
  }
`;
