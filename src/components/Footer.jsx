// Style
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>Website designed and coded by John Lombardi (That's me!)</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  bottom: 0;
  width: 100%;
  background-color: #172932;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  padding: 2rem 0;
`;
