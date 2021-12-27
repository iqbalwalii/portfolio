import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <div className="inside__border">
        <h2 className="text-center">Contact</h2>
        <Row>
          <Col xs={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group controlId="Name" className="mt-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  required="required"
                  placeholder="Your Name"
                />
              </Form.Group>
              <Form.Group controlId="email" className="mt-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required="required"
                  placeholder="Your Email Id"
                />
              </Form.Group>
              <Form.Group controlId="Message" className="mt-2">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  required="required"
                  placeholder="Your Message"
                />
              </Form.Group>
              <Col xs={{ span: 4, offset: 4 }}>
                <Button variant="success" size="lg" className="mt-3">
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;
