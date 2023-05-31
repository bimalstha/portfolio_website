import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav className="Navbar">
      <div className="sideNavbar">
        <li>Profile</li>
        <li>Contact</li>
        <li>Projects</li>
        <li>Socials</li>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  height: 100vh;
  border: 1px solid red;
  align-items: center;
  justify-content:space-around;
  li {
    color: blue;
    text-decoration: none;
    list-style: none;
    margin: 10px;
  }
`;

export default Navbar;
