import styled from "styled-components";

const Intro = () => {
  return (
    <IntroContainer>
      <Title>John Lombardi</Title>
      <Subtitle>Email Developer</Subtitle>
      <Description>I make cool emails for you.</Description>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
  font-family: "Signika", sans-serif;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 5px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #999;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
`;
