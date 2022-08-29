import React from 'react'
import { Link } from 'react-router-dom'
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
export default function LandingFooter() {
  return (
    <div>
         <section className="bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col md="3">
              <h5>Quick Links</h5>
             <p>
             <Link to="/about-us">About Us</Link>
             </p>
             <p>
             <Link to="/contact-us">Contact Us</Link>
             </p>
              <p><a href="#">News</a></p>
            </Col>

            <Col md="3">
              <h5>Follow Us</h5>
              <p><a href="#">Facebook</a></p>
              <p><a href="#">Twitter</a></p>
              <p><a href="#">Instagram</a></p>
            </Col>
            <Col md="3">
              <h5>Important Links</h5>
              <p>Applications</p>
              <p>Elearning</p>
              <p>Elearning</p>
          
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
    </div>
  )
}
