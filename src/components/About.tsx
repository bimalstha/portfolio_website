import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout>
      <section className="container" id="about">
        <h2 className="title">About</h2>
        <div className="content">
          <img className="aboutImage" src="#" alt="about image" />
          <ul className="aboutItems">
            <li className="aboutItem">
              <img src="#" alt="image one" />
              <div className="aboutItemText">
                <h3>Backend Developer</h3>
                <p>
                  I am a backend developer with a year of experience building
                  robust and scalable applications.
                </p>
              </div>
            </li>
            <li className="aboutItem">
              <img src="#" alt="image two" />
              <div className="aboutItemText">
                <h3>Frontend Developer</h3>
                <p>I am a Frontend developer </p>
              </div>
            </li>
            <li className="aboutItem">
              <img src="#" alt="image three" />
              <div className="aboutItemText">
                <h3>Database Developer</h3>
                <p>I am a database developer </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  .container {
    background-color: rgba(12, 12, 12, 0.6);
    border-radius: 15px;
    padding: 73px;
    margin-top: 129px;
    z-index: 1;
    margin-left: 10%;
    margin-right: 10%;
  }

  .title {
    color: blue;
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 1.75px;
    text-transform: uppercase;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .aboutImage {
    width: 35%;
  }

  .aboutItems {
    color: blue;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .aboutItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
    list-style: none;
    padding: 25px;
    background-image: linear-gradient(
      90deg,
      rgba(165, 215, 232, 0.42) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background-repeat: no-repeat;
    transition: 0.4s;
  }

  .aboutItem:hover {
    background-size: 100% 100%;
  }

  .aboutItem h3 {
    font-size: 25px;
    font-weight: 600;
  }

  .aboutItem p {
    font-size: 25px;
  }

  @media screen and (max-width: 830px) {
    .container {
      background-color: transparent;
      padding-left: 0;
      padding-right: 0;
    }

    .content {
      flex-direction: column;
    }

    .aboutImage {
      display: none;
    }

    .aboutItems {
      margin-top: 29px;
    }

    .aboutItem {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export default About;
