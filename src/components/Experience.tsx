import skills from "../data/skills.json";
import history from "../data/history.json";
import styled from "styled-components";

const Experience = () => {
  return (
    <StyledExperience>
      <section className="container" id="experience">
        <h2 className="title">Experience</h2>
        <div className="content">
          <div className="skills">
            {skills.map((skill, id) => {
              return (
                <div key={id} className="skill">
                  <div className="skillImageContainer">
                    <img src="#" alt="" />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
          <ul className="history">
            {history.map((historyItem, id) => {
              return (
                <li key={id} className="historyItem">
                  <img src="#" alt="some pic" />
                  <div className="historyItemDetails">
                    <h3>
                      {`${historyItem.role}, ${historyItem.organisation}`}
                    </h3>
                    <p>{`${historyItem.startDate}- ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </StyledExperience>
  );
};

const StyledExperience = styled.div`
.container{
color: blue;
margin-top: 79px;
margin-left: 10%;
margin-right: 10%;
}

.title{
color: green;
font-size: 35px;
font-weight: 700;
letter-spacing: 1.75px;
text-transform: uppercase;
}

.content{
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-top: 14px;
}

.skills{
width: 45%;
display: flex;
flex-wrap: wrap;
gap: 37px;
}

.skill{
display: flex;
flex-direction: column;
align-items: center;
gap: 11px;
}

.skillImageContainer{
background-color: pink;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
width: 120px;
height: 120px;
}

.skillImageContainer img{
widht: 75px;
}

.skill p{
font-size: 25px;
font-family: bold;
font-weight: 500;
}

.history{
width: 45%;
display: flex;
flex-direction: column;
gap: 40px;
}

.historyItem{
display: flex;
align-items: center;
gap: 17px;
backround: #19376d;
background: liner-gradient(90deg, #19376d 0%, rgba(25,55,109,0) 100%);
border: 10px;
padding: 24px;
}

.historyItem img{
width: 50px;
}

.historyItemDetails{
font-family: italic;
}

.historyItemDetails h3{
font-size: 30px;
font-weight: 500;
}

.historyItemDetails p{
font-size: 20px;
font-weight: 600;
}

.historyItemDetails ul{
margin-top: 6px;
list-style-position: inside;
font-size: 25px;
list-style-type: disc;
margin-left: 17px;
}

@media screen and (max-width: 830px){
.content{
flex-direction: column;
align-items: center;
gap: 34px; 
}

.skills{
width: 100%;
flex-direction: row;
justify-content: center;
}

.history{
width: 100%;
gap: 9px;
}
}
`;

export default Experience;
