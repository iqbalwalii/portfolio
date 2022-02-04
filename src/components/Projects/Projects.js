import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowBarRight } from "react-bootstrap-icons";
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              temporibus officia ex vitae esse dolores molestias, blanditiis
              accusantium ipsa deleniti praesentium harum perspiciatis
              repellendus illo dolor enim fugit nostrum. Nobis repellat eaque
              doloribus fuga rerum temporibus, dolores laudantium accusamus
              esse.
            </p>
            <Button>Visit</Button>
          </Col>
          <Col xs={12} md={3} className="card">
            <h5>Shuttlelane</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              temporibus officia ex vitae esse dolores molestias, blanditiis
              accusantium ipsa deleniti praesentium harum perspiciatis
              repellendus illo dolor enim fugit nostrum. Nobis repellat eaque
              doloribus fuga rerum temporibus, dolores laudantium accusamus
              esse.
            </p>
            <Button>Visit</Button>
          </Col>
          <Col xs={12} md={3} className="card">
            <h5>Shuttlelane</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              temporibus officia ex vitae esse dolores molestias, blanditiis
              accusantium ipsa deleniti praesentium harum perspiciatis
              repellendus illo dolor enim fugit nostrum. Nobis repellat eaque
              doloribus fuga rerum temporibus, dolores laudantium accusamus
              esse.
            </p>
            <Button>Visit</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 5, span: 2 }}>
            <a
              href="https://github.com/iqbalwalii"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="success mt-5">View More</Button>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
