import React from "react";
import Hero from "../src/components/Hero/Hero";
import { Row, Col } from "react-bootstrap";
import Link from "./components/Links/Links";
import "./index.css";
import "./style.css";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div class="container">
      <div>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <Row className="control">
          <Col xs={12} md={12} className="main">
            <Hero />
            <Skills />
            <Projects />
            <Contact />
          </Col>
          {/* <Col xs={12} md={1} className="social_links">
            <Link />
          </Col> */}
        </Row>
      </div>
    </div>
  );
};
export default App;
