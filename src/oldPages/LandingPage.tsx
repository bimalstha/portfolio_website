import styled from "styled-components";
import Navbar from "../oldComponents/Navbar";
import image from "../../src/assets/image.jpg";
import AboutMe from "../oldComponents/AboutMe";
import { data } from "../Data";
import Socials from "../oldComponents/Socials";

const LandingPage = () => {
  return (
    <LandingStyle>
      <Navbar />
      <div className="content">
        <div className="left-div">
          <Socials />
        </div>
        <div className="center-div">
          <div className="center-div--upper">
            <div className="left-part">
              <h1>
                Hi, I'm <span>Bimal, </span>
              </h1>
              <h1>
                <span>a web developer</span>
              </h1>
            </div>
            <div className="image-div">
              <img src={image} />
            </div>
          </div>
          <div className="center-div--lower">
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia distinctio ullam tempore nesciunt voluptas eveniet
                asperiores. Eligendi cum voluptatem <span>laboriosam.</span>
              </p>
            </div>
            <div>
              <button>Contact Me</button>
            </div>
          </div>
        </div>
        <div className="right-div"></div>
      </div>
    </LandingStyle>
  );
};

const LandingStyle = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 84px;
  }
  span {
    color: royalblue;
  }
  button {
    padding: 10px 15px;
    font-size: 24px;
    background-color: royalblue;
  }
  .content {
    display: flex;
    height: 91vh;
  }
  .left-div,
  .right-div {
    flex: 1;
    border: 1px solid red;
  }
  .center-div {
    display: flex;
    flex-direction: column;
    flex: 8;
    img {
      height: 250px;
      aspect-ratio: 1;
    }
    p {
      font-size: 24px;
    }
    .center-div--upper,
    .center-div--lower {
      flex: 1;
      border: 1px solid red;
    }
    .center-div--upper {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    .center-div--lower {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;
export default LandingPage;
