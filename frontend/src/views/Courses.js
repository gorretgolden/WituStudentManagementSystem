import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// react-bootstrap components
import {Badge,Button,Card,Navbar,Nav,Table,Container,Row,Col,Pagination,Modal,} from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewCourse from "components/courses/course";

function Courses() {
  const [show, setShow] = useState(false);
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const {register,handleSubmit,reset,watch,setValue,formState: { errors },} = useForm();
  let token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");

  //fetching all courses
  useEffect(() => {
    fetch("/courses/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
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

  const addNewCourse = (data) => {

    console.log(data)
    const body = {
      name: data.name,
      duration: data.duration,
      description: data.description,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(body),
    };

    fetch("/courses/", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServerResponse(data.message);
        setMessage(true);
        console.log(data.message);
      })
      .catch((err) => console.log(err));

    reset();
  };

  //fetch all courses
  const getAllCourses = () => {
    fetch("/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => console.log(err));
  };

  //delete a course by id
  const deleteCourse = (id) => {
    console.log(id);

    const requestOptions = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    };

    fetch(`/courses/course/${id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllCourses();
      })
      .catch((err) => console.log(err));
  };

  //show course by id
  const showUpdateModal = (id) => {
    setShow(true);
    setCourseId(id);
    courses.map((course) => {
      if (course.id == id) {
        setValue("name", course.title);
        setValue("duration", course.description);
        setValue("description", course.description);
      }
    });
  };

  //update course
  const updateCourse = (data) => {
    console.log(data);

    const requestOptions = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(data),
    };

    fetch(`/courses/course${recipeId}`, requestOptions)
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
              Add New Course
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
                      <th className="border-0">Name</th>
                      <th className="border-0">Description</th>
                 
                      <th className="border-0">Edit</th>
                      <th className="border-0">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  {courses.map((course, index) => (
                      <ViewCourse
                        id={course.id}
                        name={course.name}
                        duration={course.duration}
                        key={index}
                        onClick={() => {
                          showUpdateModal(course.id);
                        }}
                        onDelete={() => {
                          deleteCourse(course.id);
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
                  Add New  Course
                </Modal.Title>
              )}
            
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md="12" xs="12" className=" align-items-center">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Course Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Course name"
                        {...register("name", {
                          required: true,
                          minLength: 10,
                        })}
                        className="border border-dark rounded"
                      />

                      {errors.name && (
                        <p style={{ color: "red" }}>
                          <small>Course name is required</small>
                        </p>
                      )}
                      {errors.name?.type === "minLength" && (
                        <p style={{ color: "red" }}>
                          <small>
                            Course name should be more than 10 characters
                          </small>
                        </p>
                      )}
                    </Form.Group>

                    <Form.Group
                      className="mb-3 mt-2"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Duration</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Course duration"
                        {...register("duration", {
                          maxLength: 10,
                          required: true,
                          minLength: 4,
                        })}
                        className="border border-dark rounded"
                      />
                    </Form.Group>
                    {errors.duration && (
                      <p style={{ color: "red" }}>
                        <small>Course duration is required</small>
                      </p>
                    )}
                    {errors.duration?.type === "minLength" && (
                      <p style={{ color: "red" }}>
                        <small>Min characters should be 8</small>
                      </p>
                    )}
                    <br></br>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        as="textarea"
                        rows="3"
                        placeholder="Course description"
                        {...register("description", {
                          maxLength: 100,
                          minLength: 4,
                        })}
                        className="border border-dark rounded"
                      />
                    </Form.Group>
                    {errors.description?.type === "minLength" && (
                      <p style={{ color: "red" }}>
                        <small>Min characters should be 8</small>
                      </p>
                    )}
                    <br></br>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit(addNewCourse)}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <br></br>
        <br></br>
      </Container>
    </>
  );
}

export default Courses;
