import styled from "styled-components";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import { data } from "../Data";

const LandingPage = () => {
  return (
    <LandingStyle>
      <div className="left-div">
        <Navbar />
      </div>
      <div className="center-div">
        <img src="./src/assets/bimal.jpg" />
      </div>
      <div className="right-div">
        <AboutMe projectList={data} />
      </div>
    </LandingStyle>
  );
};

const LandingStyle = styled.div`
  display: flex;
  .left-div {
    flex: 10;
  }
  .center-div,
  .right-div {
    flex: 45;
  }
  .center-div {
    img {
      width: 45vw;
      height: 100vh;
    }
  }
`;
export default LandingPage;
