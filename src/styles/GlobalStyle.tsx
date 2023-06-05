import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
   *{
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
   } 
   body{
      width: 100vw;
   }
   button {
  all: unset;
  cursor: pointer;
  border-radius: 10px;
}

button:focus {
 border: none;
}
`;
