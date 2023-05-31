import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footerDiv">
        <li>FaceBook</li>
        <li>Instagram</li>
        <li>GitHub</li>
        <li>LinkedIn</li>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  .footerDiv {
    display: flex;
    border: 1px solid red;
    width: 100%;
    align-items: center;
    color: red;
    justify-content: center;
    li {
      list-style: none;
      margin: 3px;
    }
  }
`;
export default Footer;
