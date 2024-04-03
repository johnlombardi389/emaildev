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
        {/* <li>Projects</li>
        <li>About</li>
        <li>Contact</li> */}
      </StyledList>
      <StyledList>
        {/* <li>
          <img src={Logo} alt="John's JL Logo" />
        </li> */}
        <li>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
        </li>
        <li>About</li>
        <li>Contact</li>
      </StyledList>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  min-height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  max-width: 1900px;
  margin: 0 auto;
  background-color: #172932;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  li {
    padding: 0.5rem 2rem;
    position: relative;
    font-family: "Open Sans", sans-serif;
    font-size: 1.1rem;
    color: #fdfdfd;
    .nav-link {
      cursor: pointer;
      &:hover {
        color: #f9a11b;
      }
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
