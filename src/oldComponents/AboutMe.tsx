import styled from "styled-components";
import { card } from "./IdCard";
import React from "react";

type aboutMe = {
  projectList: card[];
};

const AboutMe: React.FC<aboutMe> = ({ projectList }) => {
  console.log(projectList);
  return (
    <StyledAbout>
      <div className="aboutMe-content">
        <h1>AboutMe</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          cupiditate architecto ex placeat voluptates delectus incidunt atque
          eius quia voluptatum iste assumenda enim maxime eum doloribus, qui
          suscipit accusamus, saepe, vel libero numquam fugiat quis? Voluptatem
          sit, rerum sed labore quod dicta earum, doloribus nulla reiciendis
          debitis sapiente eos deleniti.
        </p>
      </div>
      <h1>My Projects</h1>
      <div className="project-cards">
        {/* {projectList.map((item) => {
          return (
            <div className="card-div">
              <li>Title:{item.ProjectName}</li>
              <li>FrameWork:{item.FrameWork}</li>
              <li>Languagea:{item.Language}</li>
            </div>
          );
        })} */}
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  .aboutMe-content,
  .project-cards {
    /* border: 1px solid red; */
    flex: 1;
  }
  .card-div {
    border: 1px solid red;
    height: 100px;
    width: 200px;
  }
  .card-div,
  .li {
    list-style: none;
  }
`;

export default AboutMe;
