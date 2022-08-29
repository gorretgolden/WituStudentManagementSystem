
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// react-bootstrap components
import {Badge,Button,Card,Navbar,Nav,Table,Container,Row,Col,Pagination,Modal,} from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewTutorComponent from "components/tutors/viewtutors";

function TutorsList() {
  const [show, setShow] = useState(false);
  const [tutors, setTutors] = useState([]);
  const [update, setUpdate] = useState(false);
  const [tutorId, setTutorId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const {register,handleSubmit,reset,setValue,watch,formState: { errors },} = useForm();
  let token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");
  const updateClose = () => setUpdate(false);

  //fetching all tutors
  useEffect(() => {
    fetch("/users/tutors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTutors(data);
      });
  }, []);



  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  //add new tutor
  const addNewtutor = (data) => {
   

      const body = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        contact: data.contact,
        address: data.address,
        role_id: data.role_id,
      };
      
      const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
      console.log(token)
      const requestOptions = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Authorization":`Bearer ${JSON.parse(token)}`
        },
        body: JSON.stringify(body),
      };

      fetch("/users/register", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setServerResponse(data.message);
          setShow(true);
          console.log(data.message);
             
         const reload =window.location.reload()
         reload()
        })
        .catch((err) => console.log(err));

      reset();
    
  };

  

  //fetch all tutors
  const getAlltutors = () => {
    fetch("/users/tutors")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
      })
      .catch((err) => console.log(err));
  };

  //delete a tutor by id
  const deleteTutor = (id) => {
    console.log(id);

    const requestOptions = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    };

    fetch(`/users/user/${id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAlltutors();
      })
      .catch((err) => console.log(err));
  };

  //show tutor by id
  const showUpdateModal = (id) => {
    setShow(true);
    setTutorId(id);
    tutors.map((tutor) => {
      if (tutor.id == id) {
        setValue("first_name", tutor.first_name);
        setValue("last_name", tutor.last_name);
        setValue("email", tutor.email);
        setValue("address", tutor.address);
        setValue("contact", tutor.contact);
        setValue("role_id", tutor.role_id);
        setValue("password", tutor.password);
      }
    });
  };

  //update tutor
  const updateTutor = (data) => {
    console.log(data);

    const requestOptions = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(data),
    };

    fetch(`/users/user${tutorId}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const reload = window.location.reload();
        reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container fluid>
        <Row>
       
          <Col md="12">
            <Button className="float-right mb-2" onClick={handleShow}>
              Add New tutor
            </Button>
          </Col>

          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4"></Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Last Name</th>
                      <th className="border-0">First Name</th>
                 
                      <th className="border-0">Email</th>
                      <th className="border-0">Contact</th>
                      <th className="border-0">Address</th>
             
                      <th className="border-0">View</th>
                      <th className="border-0">Edit</th>
                      <th className="border-0">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  {tutors.map((tutor, index) => (
                      <ViewTutorComponent
                        id={tutor.id}
                        last_name={tutor.last_name}
                        first_name={tutor.first_name}
                        email={tutor.email}
                        address={tutor.address}
                        contact={tutor.contact}
                        key={index}
                        onClick={() => {
                          showUpdateModal(tutor.id);
                        }}
                        onDelete={() => {
                          deleteTutor(tutor.id);
                        }}
                      />
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <div className="float-right">
              <Pagination>{items}</Pagination>
            </div>
          </Col>
        </Row>

        <div className="py-5">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
      
            {message ? (
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
                <Modal.Title className="font-weight-bold">
                  Add New  Tutor
                </Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md="12" xs="12" className=" align-items-center">
                  <Form>
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
                <option value="1">Student</option>
                <option value="2">Tutor</option>
                <option value="3">Admin</option>
              </Form.Select>
              {errors.role_id && (
                <p style={{ color: "red" }}>
                  <small>{errors.role_id.message}</small>
                </p>
              )}

           
                  </Form>
                </Col>
              </Row>

             
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit(addNewtutor)}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* update student */}
        {/* <div className="py-5">
            <Modal show={update} onHide={handleClose}>
            <Modal.Header>
              {message ? (
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
                <Modal.Title className="font-weight-bold">
                  Update Student
                </Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md="12" xs="12" className=" align-items-center">
                  <Form>


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
                <option value="1">Student</option>
                <option value="2">Tutor</option>
                <option value="3">Admin</option>
              </Form.Select>
              {errors.role_id && (
                <p style={{ color: "red" }}>
                  <small>{errors.role_id.message}</small>
                </p>
              )}
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
                  </Form>
                </Col>
              </Row>


            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={updateClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit(updateTutor)}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
       
       
        
        
        </div> */}
      </Container>
    </>
  );
}

export default TutorsList;