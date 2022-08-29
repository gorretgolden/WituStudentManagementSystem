import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { login } from "../utils/auth";
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
  const {register,handleSubmit,reset,watch,formState: {errors},} = useForm();

  const history = useHistory();

  const loginUser = (data) => {
    console.log(data);

    const body={
      email: data.email,
      password:data.password
       
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("/users/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.access_token);
        if (data){
          login(data.access_token)

          history.push('/admin/dashboard')
         }
         else{
             alert('Invalid username or password')
         }
      
   
      });

    reset();
  };


  return (
    <>
      <Container className="mt-5 py-5">
        <Row>
          <Col md="2"></Col>
          <Col
            md="4"
            className=" py-5 align-items-center  shadow-lg mb-5 bg-white rounded "
          >
            <img
              className="rounded img-fluid"
              src={require("assets/img/login-img.jpg")}
            />
          </Col>
          <Col
            md="4"
            className=" align-items-center shadow-lg p-3 mb-5 bg-white rounded"
          >
            <Form>
              <h3 className="font-weight-bold">Welcome Back</h3>
              <small>Log into your account</small>
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                    maxLength: 25,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />

                {errors.email && (
                  <p style={{ color: "red" }}>
                    <small>Email is required</small>
                  </p>
                )}
                {errors.email?.type === "maxLength" && (
                  <p style={{ color: "red" }}>
                    <small>Email should be 25 characters</small>
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    maxLength: 10,
                    minLength: 4,
                  })}
                />
              </Form.Group>

              {errors.password && (
                <p style={{ color: "red" }}>
                  <small>Password is required</small>
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p style={{ color: "red" }}>
                  <small>Min characters should be 8</small>
                </p>
              )}
              <br></br>

              <Button
                type="submit"
                className=" btn-block mt-4 text-muted lead"
                onClick={handleSubmit(loginUser)}
              >
                Login
              </Button>
              <Form.Text className="text-muted mt-3 mt-4">
                <Link to="/">Back to home</Link>
              </Form.Text>
            </Form>
          </Col>

          <Col md="2"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
