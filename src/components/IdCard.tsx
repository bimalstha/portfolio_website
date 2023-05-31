import styled from "styled-components";

export type card = {
  ProjectName: string;
  Level: string;
  Contact: string;
};

const IdCard = ({ props }: { props: card }) => {
  return (
    <IdCardStyle>
      <img src="../src/assets/bimal.jpg" alt="bimal id" />
      <li>Name: {props.ProjectName}</li>
      <li>Level: {props.Level}</li>
      <li>Contact: {props.Contact}</li>
    </IdCardStyle>
  );
};

const IdCardStyle = styled.div`
  border: 1px solid green;
  display: inline-block;
  margin: 10px 15px;
`;

export default IdCard;
