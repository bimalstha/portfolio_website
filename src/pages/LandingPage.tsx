import Navbar from "../components/Navbar";
import Description from "../components/Description";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import styled from "styled-components";

const LandingPages = () => {
  return (
    <>
      <Navbar />
      <Description />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};


export default LandingPages;
