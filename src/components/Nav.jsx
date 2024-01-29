// Style
import { Link } from "react-scroll";
import styled from "styled-components";
// Icons
// Images
import Logo from "../assets/portLogo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <img src={Logo} alt="John's JL Logo" />
        </li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </StyledList>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  min-height: 5vh;
  /* margin: auto; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 1rem 5rem; */
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  li {
    /* padding-left: 3rem; */
    position: relative;
    font-size: 1.1rem;
    img {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;
