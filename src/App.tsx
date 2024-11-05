import styled from "styled-components";
import Navbar from "./oldComponents/Navbar";
import LandingPage from "./oldPages/LandingPage";
import Footer from "./oldComponents/Footer";
import AboutPage from "./oldPages/AboutPage";
import { StyleGlobal } from "./styles/GlobalStyle";
import LandingPages from "./pages/LandingPage"; //new
function App() {
  return (
    <StyledApp>
      <StyleGlobal />
      < LandingPages/>
    </StyledApp>
  );
}

const StyledApp = styled.div``;

export default App;
