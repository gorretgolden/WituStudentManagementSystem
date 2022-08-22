import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,

} from "react-bootstrap";
function Login() {
  return (
    <>
      <Container className="mt-5 py-5" >
        <Row>
         
         <Col md="2">
         </Col>
         <Col md="4"  className=" py-5 align-items-center  shadow-lg mb-5 bg-white rounded ">
          <img   className="rounded img-fluid" src={require('assets/img/login-img.jpg')}/>
            
          </Col>
          <Col md="4"  className=" align-items-center shadow-lg p-3 mb-5 bg-white rounded">
          
            <Form >
                <h3 className="font-weight-bold">Welcome Back</h3>
                <small>Log into your account</small>
                <br></br>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
              </Form.Group>
            
              <Button type="submit" className=" btn-block mt-4 text-muted lead">
                Login
              </Button>
              <Form.Text className="text-muted mt-3 mt-4">
                  <Link to="/">
                  Back to home
                  </Link>
                </Form.Text>
            </Form>
          </Col>
        

          <Col md="2">
         </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
