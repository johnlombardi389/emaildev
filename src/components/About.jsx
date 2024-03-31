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
          <img src={MrBean} alt="Beans" />
        </AboutImg>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.section`
  max-width: 1200px;
  margin: 5rem auto;
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
  /* margin: 0 2rem; */

  h3 {
    font-size: 2rem;
    color: #4d2a00;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin-top: 1rem;
  }

  @media (max-width: 1225px) {
    margin: 0 2rem;
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

  @media (max-width: 1225px) {
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    margin: 2rem 2rem 0;
  }
`;
