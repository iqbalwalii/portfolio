import React from "react";
import { Container } from "react-bootstrap";
import "./Skills.sass";
const Skills = () => {
  return (
    <Container>
      <div className="inside__border">
        <h1 className="text-center my-5">My Skills</h1>
        <div className="skills">
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/html-1.svg" width="100px" />
            <h6 className="text-center">HTML</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/css-3.svg" width="100px" />
            <h6 className="text-center">CSS</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/logo-javascript.svg" width="100px" />
            <h6 className="text-center">JAVASCRIPT</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/sass-1.svg" width="100px" />
            <h6 className="text-center">SASS</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/bootstrap-5-1.svg" width="100px" />
            <h6 className="text-center">BOOTSTRAP</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/tailwind-css-2.svg" width="100px" />
            <h6 className="text-center">TAILWIND CSS</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/python-5.svg" width="100px" />
            <h6 className="text-center">PYTHON-3</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img
              alt="skills"
              src="/assets/django-community.svg"
              width="100px"
            />
            <h6 className="text-center">DJANGO</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/react-2.svg" width="100px" />
            <h6 className="text-center">REACT.JS</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/next-js.svg" width="100px" />
            <h6 className="text-center">NEXT.JS</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/git-icon.svg" width="100px" />
            <h6 className="text-center">GIT</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/postgresql.svg" width="100px" />
            <h6 className="text-center">POSTGRESQL</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/postcss.svg" width="100px" />
            <h6 className="text-center">POST CSS</h6>
          </div>
          {/* <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/mongodb-icon-1.svg" width="100px" />
            <h6 className="text-center">MongoDB</h6>
          </div> */}
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/chakra-ui.svg" width="100px" />
            <h6 className="text-center">Chakra UI</h6>
          </div>
          {/* <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/express.svg" width="100px" />
            <h6 className="text-center">Express</h6>
          </div> */}
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/shopify.svg" width="100px" />
            <h6 className="text-center">Shopify</h6>
          </div>
          <div className="skill d-flex align-items-center justify-content-center flex-column ">
            <img alt="skills" src="/assets/ts.svg" width="100px" />
            <h6 className="text-center">TypeScript</h6>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
