import styled from "styled-components";

const Contact = () => {
  return (
    <StyledContact>

    <footer id="contact" className="container">
      <div className="text">
        <h2>Contact</h2>
        <p>Feel free to reach out.</p>
      </div>
      <ul className="links">
        <li className="link">
          <img src="#" alt="" />
          <a href="mailto:sayresthabimal@gmail.com">sayresthabimal@gmail.com</a>
        </li>
        <li className="link">
          <img src="#" alt="" />
          <a href="https://www.linkedin.com/in/bimal-shrestha-437a841a0/">
            LinkedIn Profile
          </a>
        </li>
        <li className="link">
          <img src="#" alt="" />
          <a href="https://github.com/bimalstha">
            Github Profile
          </a>
        </li>
      </ul>
    </footer>
    </StyledContact>
  );
};

const StyledContact = styled.div`
.container{
color: blue;
margin-top: 120px;
background-color: #58a9cc;
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100vw;
padding: 58px 10%;
gap: 10px;
}

.text h2{
font-size: 80px;
font-weight: 700;
letter-spacing: 4px;
}

.text p{
font-size: 40px;
font-weight: 400;
letter-spacing: 2px;
}

.links{
display: flex;
flex-direction: column;
align-items: flex-start;
list-style: none;
gap: 26px;
}

link{
display: flex;
align-items: center;
gap: 25px;

}

.link a{
color: #a82899;
text-decoration: none;
font-size: 30px;
font-weight: 400;
letter-spacing: 1.5px;
}

@media screen and (max-width: 830px){
.container{
flex-direction: column;
gap: 23px;
}

.text{
display: flex;
flex-direction: column;
align-items: center;
}

.links{
align-items: center;
}
}

`

export default Contact;
