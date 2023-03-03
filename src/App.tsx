import React from "react";
import Hero from "./components/Hero";
import { Row, Col } from "react-bootstrap";
import "./index.sass";
import "./style.scss";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Work from "./components/Work";
const App = () => {
  return (
    <div className="container">
      <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <Row className="control">
          <Col xs={12} md={12} className="main">
            <Hero />
            <Skills />
            <Work />
            <Projects />
            <Contact />
          </Col>
        </Row>
        <Socials />
      </div>
    </div>
  );
};
export default App;
