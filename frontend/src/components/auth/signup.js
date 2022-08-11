import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Roles from "../roles/roles";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch("/roles/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRoles(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const submitForm = (data) => {
    if (data.password === data.confirmPassword) {
      const body = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        contact: data.contact,
        role_id:data.role_id,
        password: data.password,
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
        })
        .catch((err) => console.log(err));

      reset();
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 col-md-4">
          {show ? (
            <>
              <Alert
                className="mt-5"
                variant="success"
                onClose={() => {
                  setShow(false);
                  navigate("/login");
                }}
                dismissible
              >
                <p>{serverResponse}</p>
              </Alert>
            </>
          ) : (
            <h3 className="text-center mt-5">Sign Up Form</h3>
          )}
          <form>
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your first name"
                {...register("first_name", { required: true, maxLength: 25 })}
              />

              {errors.first_name && (
                <small style={{ color: "red" }}>First name is required</small>
              )}
              {errors.first_name?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Max characters should be 25 </small>
                </p>
              )}
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your last name"
                {...register("last_name", { required: true, maxLength: 25 })}
              />

              {errors.last_name && (
                <small style={{ color: "red" }}>Last name is required</small>
              )}
              {errors.last_name?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Max characters should be 25 </small>
                </p>
              )}
            </Form.Group>

            <br></br>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email"
                {...register("email", { required: true, maxLength: 80 })}
              />

              {errors.email && (
                <p style={{ color: "red" }}>
                  <small>Email is required</small>
                </p>
              )}

              {errors.email?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Max characters should be 80</small>
                </p>
              )}
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="number"
                placeholder="Your contact"
                {...register("contact", { required: true, maxLength: 80 })}
              />

              {errors.contact && (
                <p style={{ color: "red" }}>
                  <small>Your contact is required</small>
                </p>
              )}

              {errors.contact?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Max characters should be 80</small>
                </p>
              )}
            </Form.Group>
            <br />

            <Form.Group>
            
              <Form.Select>
                <option>Select user role</option>
                
              {roles.map((role)=>(
                <option value={role.id} key={role.id}>{role.name}</option>
              ))}
              
              </Form.Select>
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                {...register("password", { required: true, minLength: 8 })}
              />

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
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 8,
                })}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red" }}>
                  <small>Confirm Password is required</small>
                </p>
              )}
              {errors.confirmPassword?.type === "minLength" && (
                <p style={{ color: "red" }}>
                  <small>Min characters should be 8</small>
                </p>
              )}
            </Form.Group>
            <br></br>
            <Form.Group>
              <Button
                as="sub"
                variant="primary"
                onClick={handleSubmit(submitForm)}
              >
                SignUp
              </Button>
            </Form.Group>
            <br></br>
            <Form.Group>
              <small>
                Already have an account, <Link to="/login">Log In</Link>
              </small>
            </Form.Group>
            <br></br>
          </form>
        </div>

        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default SignUpPage;
