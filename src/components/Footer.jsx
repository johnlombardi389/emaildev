// Style
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div>Hello Footer</div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  padding: 1rem 0;
`;
