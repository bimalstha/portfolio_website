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
      <div className="project-cards">
        <h1>My Projects</h1>
        <li>Title:{projectList[0].ProjectName}</li>
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
    flex: 1;
  }
`;

export default AboutMe;
