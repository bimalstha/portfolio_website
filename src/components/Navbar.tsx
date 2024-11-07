import styled from "styled-components";
import { faHamburger, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const [openMenuBtn, setOpenMenuBtn] = useState(false);
  return (
    <StyledNav className="Navbar">
      <a className="title" href="#profile">
        Profile
      </a>
      <div className="wrapper">
        <FontAwesomeIcon
          className="icon"
          icon={openMenuBtn ? faClose : faHamburger}
          color={"blue"}
          size="2x"
          onClick={() => setOpenMenuBtn(!openMenuBtn)}
        />
        <ul
          className={`${"menuItems"} ${openMenuBtn && "openMenuBtn"}`}
          onClick={() => setOpenMenuBtn(false)}
        >
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
  align-items: center;
  justify-content: space-between;
  padding-top: 61px;
  z-index: 2;
  margin: 0;

  .title {
    font-size: 25px;
    font-weight: 600;
    text-decoration: none;
    color: blue;
  }

  .icon {
    display: none;
  }
  .wrapper {
    display: flex;
  }

  .menuItems {
    display: flex;
    gap: 47px;
    list-style: none;
  }
  .menuItems a {
    font-size: 25px;
    color: black;
    text-decoration: none;
    border: 1px solid red;
  }

  @media screen and (max-width: 830px) {
    .Navbar {
      flex-direction: column;
      align-items: flex-start;
    }

    .icon {
      display: block;
    }

    .menuItems {
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 13px;
      border-radius: 10px;
      box-shadow: 0 0 4px 0;
      background: rgb(25, 55, 109);
      background: linear-gradient(
        0deg,
        rgba(25, 55, 109, 0.2) 0%,
        rgba(25, 55, 109, 1) 100%
        );
        padding: 24px 33px;
    }
    .openMenuBtn {
      display: flex;
      z-index: 1;
    }
  }
`;
export default Navbar;
