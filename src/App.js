import React from "react";
import Hero from "../src/components/Hero/Hero";
import { Row, Col } from "react-bootstrap";
import Link from "./components/Links/Links";
import "./index.css";
import Skills from "./components/Skills/Skills";
const App = () => {
  return (
    <div>
      <Row className="control">
        <Col xs={12} md={11} className="main">
          <Hero />
          <Skills />
        </Col>
        <Col xs={12} md={1} className="social_links">
          <Link />
        </Col>
      </Row>
    </div>
  );
};
export default App;
