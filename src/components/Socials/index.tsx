import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
const Socials = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="inside__border mb-4">
          <h2 className="mb-5">My Socials</h2>
          <div className="my__socials">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/iqbalwali/"
              className="linkedin"
            >
              <Linkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/iqbalwalii"
              className="facebook"
            >
              <Facebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/iqbalwali"
              className="instagram"
            >
              <Instagram />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitter.com/iqbalwalii"
              className="twitter"
            >
              <Twitter />
            </a>
            {/* <a
              target="_blank"
              rel='noreferrer'
              href="https://www.reddit.com/user/iqbalwali"
              className="reddit"
            >
              <Reddit />
            </a> */}

            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=919596537413&text=Develop%20a%20website%20for%20me"
              className="whatsapp"
            >
              <Whatsapp />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Socials;
