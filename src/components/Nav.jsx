import { Link } from "react-scroll";
// Style
import styled from "styled-components";
// Images
import Logo from "../assets/portLogo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <img src={Logo} alt="John's JL Logo" />
        </li>
      </StyledList>
      <StyledList>
        <li>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </li>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  li {
    padding: 0.5rem 2rem;
    position: relative;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
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

  @media (max-width: 809px) {
    li {
      font-size: 0.85rem;
      padding: 0.5rem 1.2rem;
    }
  }
`;
