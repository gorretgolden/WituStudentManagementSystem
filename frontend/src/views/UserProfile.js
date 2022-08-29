import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function User() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <Form.Control
                          disabled
                          placeholder="Women In Tech Uganda"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Admin"
                          placeholder="Enter your first name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="WITU"
                          placeholder="Enter your first name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="email">Email address</label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="email">Contact</label>
                        <Form.Control
                          placeholder="Contact"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col md="6">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Kamokya"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <Form.Select
                          aria-label="Default select example"
                          class="mt-4 w-20"
                        >
                          <option value="">Update Role</option>
                          <option value="1">Student</option>
                          <option value="2">Tutor</option>
                          <option value="3">Admin</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right mt-4 mb-3"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>

              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    ></img>
                    <h4 className="name">Witu Admin</h4>
                  </a>
                </div>
                <p className="description text-center">admin@gmail.com</p>
                <p className="description text-center">Kamokya</p>
                <p className="description text-center">0751547654</p>
              </Card.Body>
              <hr></hr>

              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
