import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <Container>
      <div className="inside__border">
        <div className="hero__inside">
          <div className="logo">
            <img src="../assets/IW.svg" width="110px" alt="logo_iqbal_wali" />
            <h3 style={{ color: "#7924D4" }}>Iqbal Wali</h3>
          </div>
          <div className="hero__inside">
            <div className="inside__body">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                architecto cumque sequi quae itaque eos possimus nemo sit
                voluptas officia! Incidunt inventore accusamus reiciendis con
              </p>
              <a href="#contact">
                <Button className="btn-grad">Hire me</Button>
              </a>
            </div>
            <div className="image">
              <img src="/assets/iqbalwali.jpg" alt="me" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
