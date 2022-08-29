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

function Roles() {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [roles, setRoles] = useState([]);
  const [roleId, setRoleId] = useState(0);
  const handleClose = () => setShow(false);
  const updateClose = () => setUpdate(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const {register,handleSubmit,reset,watch,setValue,formState: { errors },} = useForm();
  let token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");
  

  //fetching all roles
  useEffect(() => {
    fetch("/roles/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRoles(data);
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

  //adding new role
  const addNewRole = (data) => {
    const body = {
      name: data.name,
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

    fetch("/roles/", requestOptions)
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

  //fetch all roles
  const getAllRoles = () => {
    fetch("/roles/")
      .then((res) => res.json())
      .then((data) => {
        setRoles(data);
      })
      .catch((err) => console.log(err));
  };

  //delete a role by id
  const deleteRole = (id) => {
 
    const requestOptions = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    };

    fetch(`/roles/role/${id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllRoles();
      })
      .catch((err) => console.log(err));
  };

  //update role by id
  const showUpdateModal = (id) => {
    setUpdate(true);
    setRoleId(id);
    roles.map((role) => {
      if (role.id == id) {
        setValue("name", role.name);
      }
    });
  };

  //update role
  const updateRole = (data) => {
    console.log(data);
     const requestOptions = {
        method: "PUT",
       headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
       },
       body: JSON.stringify(data),
     };

     fetch(`/roles/role/${roleId}`, requestOptions)
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         
         const reload =window.location.reload()
         reload() 
       })
       .catch((err) => console.log(err));
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Button className="float-right mb-2" onClick={handleShow}>
              Add New Role
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
                      <th className="border-0">Edit</th>
                      <th className="border-0">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles.map((role, index) => (
                      <ViewRoleComponent
                        id={role.id}
                        name={role.name}
                        key={index}
                        onClick={() => {
                          showUpdateModal(role.id);
                        }}
                        onDelete={() => {
                          deleteRole(role.id);
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
                  Add New Role
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
                          maxLength: 10,
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
                            role name should be more than 10 characters
                          </small>
                        </p>
                      )}
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit(addNewRole)}>
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
              <Button variant="primary" onClick={handleSubmit(updateRole)}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
       
       
        </div>

      </Container>
    </>
  );
}

export default Roles;
