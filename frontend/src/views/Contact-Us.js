import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import LandingNavbar from "components/Navbars/landing";
import LandingFooter from "components/footer";

function Contact() {
  return (
    <>
      <LandingNavbar />

      <section className="text-white" style={{ backgroundColor: "#940203" }}>
        <Container>
          <Row>
            <Col md="6" className="py-5 mt-5">
              <h3 className=" font-weight-bold">Contact Us</h3>
              <p className="lead">
                Have Any Question? <br></br>Thank you for your interest in our
                services.<br></br>
                Please fill in the form or email us and we will get back to you
                promptly regarding your request.
              </p>
            </Col>
            <Col md="6" className="py-5">
              <img src={require("../assets/img/contact-us.png")} />
            </Col>
          </Row>
        </Container>
      </section>
      <section></section>
      <Container className="mt-5 py-5">
        <Row>
          <Col
            md="6"
            className=" align-items-center shadow-lg p-3 mb-5 bg-white rounded"
          >
            <h3 className="font-weight-bold">Contact Form</h3>
            <Form className="p-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter your name"
                  name="name"
                />

                <Form.Label>Your Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />

                <Form.Label>Your Contact</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your contact"
                  name="contact"
                />
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="subject"
                  placeholder="Enter your subject"
                  name="subject"
                />

                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="message"
                  placeholder="Enter your message"
                  name="message"
                  as="textarea"
                  rows="3"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="bg-dark text-white btn-lg btn-block"
              >
                Submit
              </Button>
              <Form.Text className="text-muted mt-3">
                <Link to="/">Back to home</Link>
              </Form.Text>
            </Form>
          </Col>

          <Col md="4" className="ml-5 mt-5  h-40">
            <div className="shadow-sm bg-light p-5">
              <h4 className="font-weight-bold">Call Us</h4>
              <p>
                Telephone: +256 414531700<br></br> Mobile: +256 700652010
                <br></br> WhatsApp: +256 706695369
              </p>
            </div>
<br></br>
            <div className="shadow-sm bg-light p-5">
              <h4 className="font-weight-bold">Physical Address</h4>
              <p>
                Women In Technology  Uganda Plot 143 Bukoto Street
                Box 33145, Kampala, Uganda
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <section>
        <Container>
          <Row>
            <Col md="6"></Col>
          </Row>
        </Container>
      </section>
    <LandingFooter/>
    </>
  );
}

export default Contact;
