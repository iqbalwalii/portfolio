import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const END_POINT =
  "https://public.herotofu.com/v1/d7a10020-7e7c-11ec-bc90-9fd568dae57d";
const Contact = () => {
  const [details, setDetails] = useState({});
  const onSubmitHandler = (e) => {};
  return (
    <Container>
      <div className="inside__border">
        <h2 className="text-center">Contact</h2>
        <Row>
          <Col xs={{ span: 6, offset: 3 }}>
            <Form action={END_POINT} method="post">
              <Form.Group controlId="Name" className="mt-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required="required"
                  placeholder="Your Name"
                  value={details.name}
                  name="Name"
                  id="name"
                  type="text"
                  onChange={(e) => {
                    setDetails({ ...details, name: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group controlId="email" className="mt-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="Email"
                  id="email"
                  type="email"
                  required="required"
                  placeholder="Your Email Id"
                  onChange={(e) => {
                    setDetails({ ...details, email: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="Message" className="mt-2">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  id="Message"
                  name="Message"
                  required="required"
                  placeholder="Your Message"
                  onChange={(e) => {
                    setDetails({ ...details, message: e.target.value });
                  }}
                />
              </Form.Group>
              <Col xs={{ span: 4, offset: 4 }}>
                <Button
                  variant="success"
                  size="lg"
                  className="mt-3"
                  type="submit"
                  onClick={onSubmitHandler()}
                >
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
