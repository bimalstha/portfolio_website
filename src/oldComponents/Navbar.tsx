import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav className="Navbar">
      <li>Profile</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contacts</li>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  height: 8vh;
  width: 100vw;
  border: 1px solid red;
  align-items: center;
  justify-content: end;
  li {
    color: blue;
    text-decoration: none;
    list-style: none;
  }
`;

export default Navbar;
