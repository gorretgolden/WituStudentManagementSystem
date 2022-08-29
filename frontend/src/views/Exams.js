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
import ViewRoleComponent from "components/roles/role";
import ViewStudentMarks from "components/exams/exam";

function ExamMarks() {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [marks, setMarks] = useState([]);
  const [markId, setMarkId] = useState(0);
  const handleClose = () => setShow(false);
  const updateClose = () => setUpdate(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  let token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");

  //fetching all student marks
  useEffect(() => {
    fetch("/marks/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMarks(data);
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

  //adding new mark
  const addStudentMark = (data) => {
    const body = {
      mark: data.mark,
      student_id: data.student_id,
      course_unit_id: data.course_unit_id,
    };
    const token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");
    console.log(token);

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(body),
    };

    fetch("/exams/", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServerResponse(data.message);
        setMessage(true);
        console.log(data.message);
        const reload = window.location.reload();
        reload();
      })
      .catch((err) => console.log(err));

    reset();
  };

  //fetch all student mark
  const getAllStudentMarks = () => {
    fetch("/exams/")
      .then((res) => res.json())
      .then((data) => {
        setMarks(data);
      })
      .catch((err) => console.log(err));
  };

  //delete an exam by id
  const deleteStudentMark = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    };

    fetch(`/exams/exam/${id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllStudentMarks();
      })
      .catch((err) => console.log(err));
  };

  //update exam mark by id
  const showUpdateModal = (id) => {
    setUpdate(true);
    setMarkId(id);
    marks.map((mark) => {
      if (mark.id == id) {
        setValue("mark", mark.mark);
        setValue("student_id", mark.student_id);
        setValue("course_unit_id", mark.course_unit_id);
      }
    });
  };

  //update role
  const updateStudentMark = (data) => {
    console.log(data);
    const requestOptions = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(data),
    };

    fetch(`/marks/mark/${markId}`, requestOptions)
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
              Add Student Mark
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
                      <th className="border-0">Mark</th>
                      <th className="border-0">Student</th>
                      <th className="border-0">Course Unit</th>
                      <th className="border-0">View</th>
                      <th className="border-0">Edit</th>
                      <th className="border-0">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marks.map((mark, index) => (
                      <ViewStudentMarks
                        id={mark.id}
                        mark={mark.mark}
                        student_id={mark.student_id}
                        course_unit_id={mark.course_unit_id}
                        key={index}
                        onClick={() => {
                          showUpdateModal(mark.id);
                        }}
                        onDelete={() => {
                          deleteStudentMark(mark.id);
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

        {/* add new role */}
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
                  Add Student Mark
                </Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md="12" xs="12" className=" align-items-center">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Mark</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter student marks"
                        {...register("mark", {
                          required: true,
                          maxLength:3,
                        })}
                        className="border border-dark rounded"
                      />

                      {errors.mark && (
                        <p style={{ color: "red" }}>
                          <small>Student mark is required</small>
                        </p>
                      )}
                      {errors.mark?.type === "maxLength" && (
                        <p style={{ color: "red" }}>
                          <small>
                            Student mark should not be more than 3 characters
                          </small>
                        </p>
                      )}
                    </Form.Group>
                    <Form.Label>Student</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={`w-100 p-2 mt-3  ${
                        errors.student_id && (
                          <p style={{ color: "red" }}>
                            <small>{errors.student_id.message}</small>
                          </p>
                        )
                      }`}
                      {...register("student_id", {
                        required: "Student is required",
                      })}
                    >
                      <option value="">Select a Course Unit</option>
                      <option value="1">Python</option>
                      <option value="2">Web</option>
                    </Form.Select>
                    {errors.student_id && (
                      <p style={{ color: "red" }}>
                        <small>{errors.student_id.message}</small>
                      </p>
                    )}

                    <br></br>
                    <br></br>
                    <Form.Label>Course Unit</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={`w-100 p-2 mt-3  ${
                        errors.student_id && (
                          <p style={{ color: "red" }}>
                            <small>{errors.student_id.message}</small>
                          </p>
                        )
                      }`}
                      {...register("course_unit_id", {
                        required: "Student is required",
                      })}
                    >
                      <option value="">Select a student</option>
                      <option value="1">Nabatanzi Gorret</option>
                      <option value="2">Mbabazi Violet</option>
                    </Form.Select>
                    {errors.course_unit_id && (
                      <p style={{ color: "red" }}>
                        <small>{errors.course_unit_id.message}</small>
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
              <Button variant="primary" onClick={handleSubmit(addStudentMark)}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <br></br>
        <br></br>

        {/* update role */}
        <div className="py-5">
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
                  Update Role
                </Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md="12" xs="12" className=" align-items-center">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter role name"
                        {...register("name", {
                          required: true,
                          maxLength: 15,
                        })}
                        className="border border-dark rounded"
                      />

                      {errors.name && (
                        <p style={{ color: "red" }}>
                          <small>role name is required</small>
                        </p>
                      )}
                      {errors.name?.type === "maxLength" && (
                        <p style={{ color: "red" }}>
                          <small>
                            role name should not be than 15 characters
                          </small>
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
              <Button
                variant="primary"
                onClick={handleSubmit(updateStudentMark)}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </>
  );
}

export default ExamMarks;
