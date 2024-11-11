import React from "react";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
  return (
    <StyledProjectCard>
      <div className="container">
        <img className="image" src="#" alt={project.title} />
        <h3 className="title">{project.title}</h3>
        <p className="description">{project.description}</p>
        <ul className="skills">
          {project.skills.map((skill, id) => {
            return (
              <li className="skill" key={id}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className="links">
          <a className="link" href={project.demo}>
            Demo
          </a>
          <a className="link" href={project.source}>
            Source
          </a>
        </div>
      </div>
    </StyledProjectCard>
  );
};

const StyledProjectCard = styled.div`
.container{
display: flex;
flex-direction: column;
border-radius: 10px;
background: liner-gradient(180deg, #576cbc 0%, #132a53 100%);
box-shadow: 0 16px 0 #04152d;
padding: 18px 24px;
}

.image{
margin-botton: 26px;
}

.title{
font-size: 25px;
font-weight: 700;
}

.description{
margin-top: 6px;
font-size:25px;
font-weight: 400;
}

.skills{
width: 100%;
margin-top: 14px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 6px;
list-style: none;
}

.skill{
font-size: 25px;
font-weight: 400;
border-radius: 100px;
backgroud: dark;
padding: 2px 22px;
}

.links{
widht: 100%;
margin-top: 26px;
display: flex;
justify-content: space-around;
}

.link{
text-decoration: none;
color: blue;
font-size: 30px;
font-weight: 600;
border-radius: 100px;
background: pink;
padding: 1px 22px;
}

`;

export default ProjectCard;
