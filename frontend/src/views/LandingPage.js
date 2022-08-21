import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Pagination,
  Carousel,
} from "react-bootstrap";
import Footer from "components/Footer/Footer";

function LandingPage() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <div className="d-flex justify-content-center align-items-center  ml-lg-0">
            <Button
              variant="dark"
              className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            >
              <i className="fas fa-ellipsis-v"></i>
            </Button>
            <Navbar.Brand
              href="#home"
              onClick={(e) => e.preventDefault()}
              className="mr-2"
            ></Navbar.Brand>
          </div>

          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="d-lg-block"> WITU</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">Contact</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">News</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="/login"
              
              >
                <span className="border:2px solid black">Login</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <section className="mb-5">
        <Row>
          <Col md="12">
            <Carousel>
              <Carousel.Item>
                <img
                  className=" w-100"
                  src="https://img.freepik.com/free-photo/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma_496169-1363.jpg?size=626&ext=jpg&uid=R46484519&ga=GA1.2.865723822.1660061549"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-50"
                  src="https://img.freepik.com/free-photo/photo-smart-graduate-student-showing-her-diploma-book-wall-high-quality-photo_144627-73613.jpg?size=626&ext=jpg&uid=R46484519&ga=GA1.2.865723822.1660061549"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-photo/young-female-african-american-student-with-diploma-poses-outdoorsxa_627829-3973.jpg?size=626&ext=jpg&uid=R46484519&ga=GA1.2.865723822.1660061549"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </section>

      <section className="mt-5 py-5">
        <Container className="bg-dark py-2 rounded">
          <Row>
            <Col md="6" className="text-white px-4 mt-5 ">
              <h3 className="font-weight-bold">Women In Tech Uganda</h3>

              <p>
                Looking to start your undergraduate studies? We have a number of
                entry options and free pathway programmes to support you. Our
                University stands as a global leader distinguished by our
                commitment to Excellence, Innovation and Transformation.
              </p>
              <Button className="mt-4 ">Apply</Button>
            </Col>

            <Col md="6">
              <img
                className="w-10 rounded img-thumbnail"
                src="https://img.freepik.com/free-photo/joyful-black-author-works-writing-new-book-readers_273609-28047.jpg?size=626&ext=jpg&uid=R46484519&ga=GA1.2.865723822.1660061549"
              ></img>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section>
        <Container>
          <Row>
            <Col md="4">
              <h3>Welcom</h3>
              <p>rdtghujzwetgvaweervqweastr5yt2e3ractsr</p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </Col>

            <Col md="4">
              <h3>Welcom</h3>
            </Col>

            <Col md="4">
              <h3>Welcom</h3>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="mt-5 px-4">
        <Container>
          <h3 className="text-center mb-4 font-weight-bold">
            Available Courses
          </h3>
          <Row>
            <Col md="4">
              <Card className="card-stats shadow-sm ">
                <Card.Body>
                  <Row>
                    <Col xs="12">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-chart text-warning"></i>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <h5 className="text-center">
                      {" "}
                      Diploma In Computer Science
                    </h5>
                  </div>
                </Card.Footer>
              </Card>
            </Col>

            <Col md="4">
              <Card className="card-stats shadow-sm ">
                <Card.Body>
                  <Row>
                    <Col xs="12">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-chart text-warning"></i>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <h5 className="text-center">Certificate in Computing</h5>
                  </div>
                </Card.Footer>
              </Card>
            </Col>

            <Col md="4">
              <Card className="card-stats shadow-sm ">
                <Card.Body>
                  <Row>
                    <Col xs="12">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-chart text-warning"></i>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <h5 className="text-center">
                      {" "}
                      Diploma In Computer Science
                    </h5>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 mt-5 bg-gray">
        <Container>
          <Row>
            <Col md="6" className="mt-5">
              <h4 className="font-weight-bold">Computer Science</h4>
              <p>
                As one of the most innovative academic institutions in Uganda,
                we’re renowned for our accredited programmes, quality education
                and student-centred way of doing business that transforms and
                inspires students to reach their full potential in employment,
                entrepreneurship, and ethical leadership. As one of the most
                innovative academic institutions in Uganda, we’re renowned for
                our accredited programmes.
              </p>
              <div className="mb-3">
                <Button>Learn More</Button>
              </div>
            </Col>

            <Col md="6">
              <img
                className="img-thumbnail"
                src="https://img.freepik.com/premium-photo/female-student-graduate-is-standing-university-hall-mantle-smiling-with-diploma-hands_115086-791.jpg?size=626&ext=jpg&uid=R46484519&ga=GA1.2.865723822.1660061549"
              ></img>
            </Col>
          </Row>
          <Row className="mt-5 py-5">
            <Col md="6">
              <img
                className="img-thumbnail"
                src="https://img.freepik.com/premium-photo/female-student-graduate-is-standing-university-hall-mantle-smiling-with-diploma-hands_115086-791.jpg?size=626&ext=jpg&uid=R46484519&ga=GA1.2.865723822.1660061549"
              ></img>
            </Col>
            <Col md="6" className="mt-5">
              <h4 className="font-weight-bold">Computer Science</h4>
              <p>
                As one of the most innovative academic institutions in Uganda,
                we’re renowned for our accredited programmes, quality education
                and student-centred way of doing business that transforms and
                inspires students to reach their full potential in employment,
                entrepreneurship, and ethical leadership. As one of the most
                innovative academic institutions in Uganda, we’re renowned for
                our accredited programmes.
              </p>
              <div className="mb-3">
                <Button>Learn More</Button>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 py-5">
            <Col md="6" className="mt-5">
              <h4 className="font-weight-bold">Computer Science</h4>
              <p>
                As one of the most innovative academic institutions in Uganda,
                we’re renowned for our accredited programmes, quality education
                and student-centred way of doing business that transforms and
                inspires students to reach their full potential in employment,
                entrepreneurship, and ethical leadership. As one of the most
                innovative academic institutions in Uganda, we’re renowned for
                our accredited programmes.
              </p>
              <div className="mb-3">
                <Button>Learn More</Button>
              </div>
            </Col>

            <Col md="6">
              <img
                className="img-thumbnail"
                src="https://img.freepik.com/premium-photo/female-student-graduate-is-standing-university-hall-mantle-smiling-with-diploma-hands_115086-791.jpg?size=626&ext=jpg&uid=R46484519&ga=GA1.2.865723822.1660061549"
              ></img>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col md="6">
              <h3>Welcom</h3>
              <p>rdtghujzwetgvaweervqweastr5yt2e3ractsr</p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </Col>

            <Col md="6">
              <h3>Title</h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col md="6"></Col>
          </Row>
        </Container>
      </section>
      <section className="bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col md="3">
              <h5>Quick Links</h5>
              <p>About us</p>
              <p>Contact us</p>
              <p>News</p>
            </Col>

            <Col md="3">
              <h5>Follow Us</h5>
              <p>fb</p>
              <p>tw</p>
              <p>ig</p>
            </Col>
            <Col md="3">
              <h5>Important Links</h5>
              <p>Applications</p>
              <p>Elearning</p>
              <p>Sacholarships</p>
            </Col>
            <Col md="3">
              <h5>Our Contacts</h5>
              <p>0751547654</p>
              <p>07767401566</p>
              <p>witu@mail.com</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LandingPage;
