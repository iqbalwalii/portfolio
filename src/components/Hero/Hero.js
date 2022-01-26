import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <Container>
      <div className="inside__border">
        <div className="navbar d-flex">
          <div className="d-flex align-items-center">
            <img src="../assets/IW.svg" width="110px" alt="logo_iqbal_wali" />
            <h3 style={{ color: "#7924D4" }}>Iqbal Wali</h3>
          </div>
        </div>
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-start flex-column "
          >
            <div className="left">
              Hello, I Am IQbal wali, Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Alias id eius asperiores assumenda veritatis
              quia iure ipsam aperiam iusto corrupti!
            </div>
            <Button className="btn-grad">Hire Me</Button>
          </Col>
          <Col xs={12} md={{ span: 4, offset: 2 }}>
            <div className="circle">
              <img src="../assets/iqbalwali.png" alt="Iqbalwali" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Hero;
