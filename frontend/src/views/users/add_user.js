import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
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
function AddUser() {
  const [show, setShow] = useState(false);
  const [serverResponse, setServerResponse] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  //registering a user
  const addUser = (data) => {
    if (data.password === data.confirm_password) {
      const body = {
        first_name: data.first_name,
        last_name: data.last_name,
        contact: data.contact,
        email: data.email,
        address: data.address,
        password: data.password,
        role_id: data.role_id,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      };

      fetch("/users/signup", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setServerResponse(data.message);
          setShow(true);
          console.log(data.message);
        })
        .catch((err) => console.log(err));

      reset();
    } else {
      alert("Passwords do not match");
    }
  };

  console.log(watch("email"));
  return (
    <>
      <Container className="mt-5 py-5">
        <Row>
          <Col md="3"></Col>

          <Col
            md="6"
            className=" align-items-center shadow-lg p-3 mb-5 bg-white rounded"
          >
            {show ? (
              <>
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <strong>{serverResponse}</strong>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </>
            ) : (
              <h3 className="font-weight-bold">Add New User</h3>
            )}
            <Form>
            
            
              <br></br>

              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  {...register("first_name", {
                    required: true,
                    maxLength: 25,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors.first_name && (
                  <p style={{ color: "red" }}>
                    <small>
                      First name is required and should not have numbers, space
                      or characters
                    </small>
                  </p>
                )}
                {errors.first_name?.type === "maxLength" && (
                  <p style={{ color: "red" }}>
                    <small>First_name should be 25 characters</small>
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  {...register("last_name", {
                    required: true,
                    maxLength: 25,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />

                {errors.last_name && (
                  <p style={{ color: "red" }}>
                    <small>
                      Last name is required and should not have numbers, space
                      or characters
                    </small>
                  </p>
                )}
                {errors.last_name?.type === "maxLength" && (
                  <p style={{ color: "red" }}>
                    <small>Last name should be 25 characters</small>
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true, maxLength: 25 })}
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

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  {...register("address", {
                    required: true,
                    maxLength: 25,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors.address && (
                  <p style={{ color: "red" }}>
                    <small>
                      User address is required and should not have numbers,
                      space or characters
                    </small>
                  </p>
                )}
                {errors.address?.type === "maxLength" && (
                  <p style={{ color: "red" }}>
                    <small>address should be 25 characters</small>
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter contact"
                  {...register("contact", { required: true, maxLength: 25 })}
                />
                {errors.contact && (
                  <p style={{ color: "red" }}>
                    <small>contact is required</small>
                  </p>
                )}
                {errors.contact?.type === "maxLength" && (
                  <p style={{ color: "red" }}>
                    <small>contact should be 25 characters</small>
                  </p>
                )}
              </Form.Group>

              <Form.Select
                aria-label="Default select example"
                className={`w-100 p-2 mt-3  ${
                  errors.role_id && (
                    <p style={{ color: "red" }}>
                      <small>{errors.role_id.message}</small>
                    </p>
                  )
                }`}
                {...register("role_id", { required: "User role is required" })}
              >
                <option value="">Select User role</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              {errors.role_id && (
                <p style={{ color: "red" }}>
                  <small>{errors.role_id.message}</small>
                </p>
              )}

              <Form.Group className="mb-3 mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>
                    <small>password is required</small>
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p style={{ color: "red" }}>
                    <small>Password should be 8 characters</small>
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirm_password", {
                    required: true,
                    minLength: 8,
                  })}
                />

                {errors.confirm_password && (
                  <p style={{ color: "red" }}>
                    <small>confirm_password is required</small>
                  </p>
                )}
                {errors.confirm_password?.type === "minLength" && (
                  <p style={{ color: "red" }}>
                    <small>confirm_password should be 8 characters</small>
                  </p>
                )}
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className=" btn-lg btn-block"
                onClick={handleSubmit(addUser)}
              >
                Submit
              </Button>
            </Form>
          </Col>

          <Col md="3"></Col>
        </Row>
      </Container>
    </>
  );
}

export default AddUser;
