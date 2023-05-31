import styled from "styled-components";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import { StyleGlobal } from "./styles/GlobalStyle";

function App() {
  return (
    <StyledApp>
      <StyleGlobal />
      <LandingPage />
    </StyledApp>
  );
}

const StyledApp = styled.div``;

export default App;
