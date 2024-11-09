import styled from "styled-components";

const Description = () => {
  return (
    <StyledDescription>
      <section className="container">
        <div className="content">
          <h1 className="title">Hi, I am Bimal</h1>
          <p className="description">
            I am a full-stack developer with a year of experience in React and
            Node Js. I am open for collaboration.
          </p>
          <a href="mailto:sayresthabimal@gmail.com" className="contactBtn">
            Contact Me
          </a>
          <img src="#"  className="image" />
          <div className="topBlur" />
          <div className="bottomBlur" />
        </div>
      </section>
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  .container {
    postion: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 49px;
    margin-left: 10%;
    margin-right: 10%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: blue;
    z-index: 1;
  }

  .title {
    font-size: 72px;
    font-weight: 900;
    margin-botton: 33px;
    font-family: bold;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 70% rgba(255, 255, 255, 0) 120%
    );
  }

  .description{
  font-size: 30px;
  font-family: bold;
  margin-botton: 52px;
  }

  .contactBtn{
  text-decoration: none;
  backgraound-color: green;
  color: black;
  border-radius: 100px;
  font-size: 30px;
  font-weight: 600;
  padding: 600;
  box-shadow: 0 0 4pz 0 rgba(0, 0, 0, 0.25)
  }

  .image{
  width: 50%;
  z-index: 1;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  }

.topBlur{
position: absolute;
width: 50vw;
height: 50vh;
min-width: 350px;
max-width: 350px;
top: -120px;
left: 10vw;
border: 764px;
background: rgba(25,55, 109,0.7);
filter: blur(100px);
z-index: 0;
}

.bottomBlur {
position: absolute;
width: 70vw;
height: 50vh;
min-width: 350px;
max-width: 250px;
top: 120px;
right: 246vw;
border-radius: 764px;
background: rgba(25,55, 109,0.7);
filter: blur(100px);
z-index: 0;
}

@media screen and (max-width){
.container{
flex-direction: column-reverse;
}

.content{
align-items: center; 
}
}
`;

export default Description;
