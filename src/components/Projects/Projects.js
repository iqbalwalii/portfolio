import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import { ArrowBarRight } from "react-bootstrap-icons";
import "./Projects.css";
const Projects = () => {
  return (
    <Container>
      <div className="inside__border">
        <h1 className="text-center my-5">My Work</h1>
        <Row className="projects">
          <Col xs={12} md={3} className="card">
            <h5>Shuttlelane</h5>
            <hr />
            <div className="card__body">
              <p>
                SHUTTLELANE IS A WEBSITE THAT PROVIDES EXECUTIVE AIRPORT
                TRANSFER AND ACCOMMODATION SERVICES. BECAUSE THEY ARE COMMITTED
                TO ENRICHING TRAVEL EXPERIENCES
              </p>
              <a
                href="https://shuttlelane.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Visit</Button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={3} className="card">
            <h5>Seraab Valley</h5>
            <hr />
            <div className="card__body">
              <p>
                SERAAB VALLEY IS A KASHMIR BASED E-COMMERCE WEB APP WHERE USERS
                CAN GET SUPPLIES OF EXCUISITE DRY FRUITS AND SPECIAL KASHMIRI
                TREATS STRAIGHT FROM KASHMIR.
              </p>
              <a
                href="https://seraabvalley.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Visit</Button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={3} className="card">
            <h5>DropoutDevs</h5>
            <hr />
            <div className="card__body">
              <p>
                DropoutDevs is one of the best web development companies in
                kashmir with proven expertise in the field of web designing, web
                development, App Development and SEO
              </p>
              <a
                href="https://dropoutdevs.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Visit</Button>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ offset: 5, span: 2 }}>
            <a
              href="https://github.com/iqbalwalii"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button variant="success mt-5 btn-grad"> More</Button>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
