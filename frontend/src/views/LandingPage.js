import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAuth,logout } from "utils/auth";
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
import { Link } from "react-router-dom";
import LandingNavbar from "components/Navbars/landing";
import LandingFooter from "components/footer";

function LandingPage() {

  const [logged]= useAuth()
  return (
    <>
      {/* <Navbar bg="light" expand="lg">
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

              {logged? <><Nav.Link className="m-0" href="/login">
                <span className="border:2px solid black">Login</span>
              </Nav.Link></>: <>
              <Nav.Item>
              <Nav.Link className="m-0">
                <span onClick={logout()} className="border:2px solid black">LogOut</span>
              </Nav.Link>
            </Nav.Item>
              </>}
             
            </Nav.Item>

          
          </Nav>
        </Container>
      </Navbar> */}
     <LandingNavbar/>
      <section className="mb-5">
        <Row>
          <Col md="12">
            <Carousel>
              <Carousel.Item>
                <img
                  className=" w-100"
                  src={require("assets/img/slider-1.jpg")}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-50"
                  src={require("assets/img/slider-2.jpg")}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("assets/img/slider-3.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </section>

      <section className="mt-5 py-5">
        <Container className="shadow-sm bg-light rounded">
          <Row>
            <Col md="6" className=" px-4 mt-5 ">
              <h3 className="font-weight-bold">Women In Technology Uganda</h3>

              <p className="mt-3">
                Looking to start your undergraduate studies? We have a number of
                entry options and free pathway programmes to support you. Our
                University stands as a global leader distinguished by our
                commitment to Excellence, Innovation and Transformation.
                Looking to start your undergraduate studies? We have a number of
                entry options and free pathway programmes to support you. Our
                University stands as a global leader distinguished by our
                commitment to Excellence, Innovation and Transformation.
              </p>
              <Button className="mt-4 bg-lg ">Apply Today</Button>
            </Col>

            <Col md="6">

              <iframe
                width="500"
                height="438"
                src="https://www.youtube.com/embed/8VZTtRX4HIk"
                title="Women in Tech: Advice from Five Female Leaders"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                autoPlay
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>

     

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
                  <div className="px-5">
                    <h5 className="text-center">Diploma In Computer Science</h5>
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
                  <div className="px-5">
                    <h5 className="text-center">Elevate Computer Programs</h5>
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
                  <div className="px-5">
                    <h5 className="text-center">Business Recovery Programs</h5>
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
              <h4 className="font-weight-bold">Diploma in Computer Science</h4>
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
                className="img-thumbnail ml-5"
                src="https://img.freepik.com/free-photo/joyful-black-author-works-writing-new-book-readers_273609-28047.jpg?size=626&ext=jpg&uid=R46484519&ga=GA1.2.865723822.1660061549"
              ></img>
            </Col>
          </Row>
          <Row className="mt-5 py-5">
            <Col md="6">
              <img
                className="img-thumbnail"
                src="https://witi.ac.ug/wp-content/uploads/2022/01/sponsorship-1-scaled.jpeg"
              ></img>
            </Col>
            <Col md="6" className="mt-5 px-5">
              <h4 className="font-weight-bold">Elevate Computer Programs</h4>
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
              <h4 className="font-weight-bold">Business Recovery Programs</h4>
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
                className="img-thumbnail ml-5"
                src="https://img.freepik.com/premium-photo/female-student-graduate-is-standing-university-hall-mantle-smiling-with-diploma-hands_115086-791.jpg?size=626&ext=jpg&uid=R46484519&ga=GA1.2.865723822.1660061549"
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
      <section>
        <Container>
          <Row>
            <Col md="3">
              <img src=""/>
            
            </Col>

            <Col md="3">
              
            </Col>
            <Col md="3">
              
              </Col>
              <Col md="3">
              
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
  <LandingFooter/>
    </>
  );
}

export default LandingPage;
