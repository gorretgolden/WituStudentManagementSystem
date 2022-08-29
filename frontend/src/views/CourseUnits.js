import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
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
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function CourseUnits() {
  const [show, setShow] = useState(false);
  const [courseunits, setCourseunits] = useState([]);
  const [courseunitId, setCourseunitId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  let token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");

  //fetching all courses
  useEffect(() => {
    fetch("/course_units/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourseunits(data);
      });
  }, []);

  //mapping through the response
  const courseunitlists = courseunits.map((course) => (
    <tr key={course.id}>
      <td>{course.id}</td>
      <td>{course.name}</td>
      <td>{course.program}</td>
      <td>{course.semister}</td>

      <td>
        <FontAwesomeIcon icon={faEye} />
      </td>
      <td>
        <FontAwesomeIcon icon={faPencil} />
      </td>
      <td>
        <FontAwesomeIcon icon={faTrash} />
      </td>
    </tr>
  ));

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

    fetch(`/course/${id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllCourses();
      })
      .catch((err) => console.log(err));
  };

  //show course by id
  const showModal = (id) => {
    setShow(true);
    setCourseId(id);
    courseunits.map((course) => {
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
              Add New Course Unit
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
                      <th className="border-0">Program</th>
                      <th className="border-0">Semister</th>
                      <th className="border-0">View</th>
                      <th className="border-0">Edit</th>
                      <th className="border-0">Delete</th>
                    </tr>
                  </thead>
                  <tbody>{courseunitlists}</tbody>
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
                  Add New Course Unit
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

                 

                    <Form.Label>Select Pogram</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={`w-100 p-2 mt-3  ${
                        errors.program_id && (
                          <p style={{ color: "red" }}>
                            <small>{errors.course_id.message}</small>
                          </p>
                        )
                      }`}
                      {...register("program_id", {
                        required: "Course Program  is required",
                      })}
                    >
                      <option value="">Select Program Course</option>
                      <option value="1">Cohort One</option>
                      <option value="2">Cohort Two</option>
                    </Form.Select>
                    {errors.status && (
                      <p style={{ color: "red" }}>
                        <small>{errors.status.message}</small>
                      </p>
                    )}

                    <Form.Label>Select Select</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={`w-100 p-2 mt-3  ${
                        errors.semister_id && (
                          <p style={{ color: "red" }}>
                            <small>{errors.course_id.message}</small>
                          </p>
                        )
                      }`}
                      {...register("semister_id", {
                        required: "Course Program  is required",
                      })}
                    >
                      <option value="">Select Semister</option>
                      <option value="1">Semister One</option>
                      <option value="2">Semister Two</option>
                    </Form.Select>
                    {errors.status && (
                      <p style={{ color: "red" }}>
                        <small>{errors.status.message}</small>
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

export default CourseUnits;
