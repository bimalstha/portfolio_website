import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav className="Navbar">
      <a className="title" href="#profile">Profile</a>
      <div className="menu">
        <ul className="menuItems">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#socials">Socials</a>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.div`
position: relative;
  display: flex;
  align-item: centre;
  justify-content: space-between;
  padding-top: 61px;
  margin: 0 10%;
  z-index: 2
.title{
font-size: 10px;
font-weight:600;
text-decoration: none;
color: red;
}

.menu{
display: flex;
}
.menuItems{
display: flex;
gap: 47px;
list-style: none;
}

  `;
export default Navbar;
