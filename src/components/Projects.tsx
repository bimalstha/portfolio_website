import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import styled from "styled-components";

const Projects = () => {
  return (
    <section className="container" id="projects">
      <h2 className="tilte">Projects</h2>
      <div className="projects">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

const StyledProjects = styled.div`
.container{
margin-top: 76px;
color: blue;
margin-left: 10%;
margin-right: 10%;
}

.title{
font-size: 35px;
font-weight: 700;
letter-spacing: 1.75px;
text-transform: uppercase;
}

.projects{
margin-top: 37px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 15px;
width: 100%;
}
`

export default Projects;
