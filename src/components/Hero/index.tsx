import React from "react";
import { Container, Button } from "react-bootstrap";
import "../Hero/Hero.sass";
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
            <div className="inside__body hero">
              <p>
                Hello, My Name is Iqbal wali. I am a CS Graduate. I completed my
                Bachelors in Computer Application from Islamia College Srinagar
                and i am pursuing my Masters through distance education from
                Indra Gandhi National Open University. I am Self taught
                developer doing freelance work and ready to make your websites
                more interactive and user friendly.
              </p>
              <a href="#contact" className="hireBtn">
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
