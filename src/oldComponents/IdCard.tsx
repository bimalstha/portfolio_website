import styled from "styled-components";

export type card = {
  ProjectName: string;
  FrameWork: string;
  Language: string;
};

const IdCard = ({ props }: { props: card }) => {
  return (
    <IdCardStyle>
      <img src="../src/assets/bimal.jpg" alt="bimal's id" />
      <li>Name: {props.ProjectName}</li>
      <li>Level: {props.FrameWork}</li>
      <li>Contact: {props.Language}</li>
    </IdCardStyle>
  );
};

const IdCardStyle = styled.div`
  border: 1px solid green;
  display: inline-block;

`;

export default IdCard;
