import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "utils/auth";
import { useHistory } from "react-router-dom";
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  //logging in a user
  const loginUser = (data) => {
    console.log(data);

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

        if (data) {
          login(data.access_token);

          history.push("/");
        } else {
          alert("Invalid username or password");
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
            <form>
              <h3 className="font-weight-bold">Welcome Back</h3>
              <small>Log into your account</small>
              <br></br>
             
              {/* email address */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  {...register("email", { required: true, maxLength: 25 })}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              {/* email address errors*/}
              {errors.email && <p style={{color:'red'}}><small>Email is required</small></p>}
                {errors.email?.type === "maxLength" && <p style={{color:'red'}}><small>Email should be 25 characters</small></p>}
                <br></br>


              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register('password',{required:true,minLength:8})}
                />
              </Form.Group>

              {errors.password && <p style={{color:'red'}}><small>Password is required</small></p>}
                {errors.password?.type === "maxLength" && <p style={{color:'red'}}>
                    <small>Password should be more than 8 characters</small>
                    </p>}

              <Button type="submit" className=" btn-block mt-4 text-muted lead" onClick={handleSubmit(loginUser)}>
                Login
              </Button>
              <Form.Text className="text-muted mt-3 mt-4">
                <Link to="/">Back to home</Link>
              </Form.Text>
            </form>
          </Col>

          <Col md="2"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
