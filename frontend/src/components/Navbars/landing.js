import React, { Component } from "react";
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


function LandingNavbar(){
  {
    return (
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
              href="#"
              className="mr-2"
            >
                <img src={require('../../assets/img/witi.jpg')} style={{width:50}}/>
            </Navbar.Brand>
          </div>

          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="/"
      
              >
                <span className="d-lg-block"> WITU</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto" navbar>

          <Nav.Item>
              <Nav.Link
                className="m-0"
                href="/"
      
              >
                <span className="no-icon">Home</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="/about-us"
                // onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">About Us</span>
              </Nav.Link>
            </Nav.Item>
          
            {/* <Nav.Item>
              <Nav.Link className="m-0" href="/admissions">
                <span className="border:2px solid black">Admissions</span>
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="/contact-us"

              >
                <span className="no-icon">Contact Us</span>
              </Nav.Link>
            </Nav.Item>


            

            {/* <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">News</span>
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link className="m-0" href="/login">
                <span className="border:2px solid black">Login</span>
              </Nav.Link>
            </Nav.Item>

            
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default LandingNavbar;