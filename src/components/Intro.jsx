import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { introAnimation } from "../style/animation";

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Intro = () => {
  return (
    <IntroContainer
      variants={introAnimation}
      initial="show"
      animate="show"
      exit="exit"
    >
      <Title>John Lombardi</Title>
      <Subtitle>Email Developer</Subtitle>
      <Description>I make cool emails for you.</Description>
      <LoadingIndicator>
        <DelayedDot />
        <DelayedDot />
        <DelayedDot />
      </LoadingIndicator>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled(motion.div)`
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
  margin-bottom: 1.2rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 5px;
  animation: ${bounce} 1s ease-in-out infinite alternate;
`;

const LoadingIndicator = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const DelayedDot = styled(Dot)`
  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
`;
