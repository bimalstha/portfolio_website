import {
  faFacebook,
  faFacebookSquare,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Socials = () => {
  return (
    <SytledSocial>
      <FontAwesomeIcon
        className="icons"
        icon={faLinkedin}
        color={"blue"}
        size="2x"
      />
      <FontAwesomeIcon
        className="icons"
        icon={faFacebook}
        color={"blue"}
        size="2x"
      />
      <FontAwesomeIcon
        className="icons"
        icon={faInstagram}
        color={"blue"}
        size="2x"
      />
      <FontAwesomeIcon
        className="icons"
        icon={faGithub}
        color={"blue"}
        size="2x"
      />
    </SytledSocial>
  );
};

const SytledSocial = styled.div`
  height: 91vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  .icons {
    margin: 10px 0;
  }
`;

export default Socials;
