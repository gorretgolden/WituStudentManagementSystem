import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
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
  Form,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

function Programs() {
  const [show, setShow] = useState(false);

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

  const addNewProgram = (data) => {
    const body = {
      name: data.name,
      start_date: data.start_date,
      end_date: data.end_date,
      description: data.description,
      status: data.status,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("/programs/", requestOptions)
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

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Button className="float-right mb-2" onClick={handleShow}>
              Add New Program
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
                      <th className="border-0">start_date</th>
                      <th className="border-0">Start Date</th>
                      <th className="border-0">End Date</th>
                      <th className="border-0">View</th>
                      <th className="border-0">Edit</th>
                      <th className="border-0">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Computer Science</td>
                      <td>Programming</td>
                      <td>Cohort 2</td>
                      <td>2years</td>

                      <td>7th/05/2022</td>
                      <td>15th/03/2024</td>

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
                  Add New Program
                </Modal.Title>
              )}
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md="12" xs="12" className=" align-items-center">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Program Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Program name"
                        {...register("name", {
                          required: true,
                          minLength: 10,
                        })}
                        className="border border-dark rounded"
                      />

                      {errors.name && (
                        <p style={{ color: "red" }}>
                          <small>Program name is required</small>
                        </p>
                      )}
                      {errors.name?.type === "minLength" && (
                        <p style={{ color: "red" }}>
                          <small>
                            Program name should be more than 10 characters
                          </small>
                        </p>
                      )}
                    </Form.Group>

                    <Form.Group
                      className="mb-3 mt-2"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Program Start Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Program start date"
                        {...register("start_date", {
                          required: true,
                        })}
                        className="border border-dark rounded"
                      />
                    </Form.Group>
                    {errors.start_date && (
                      <p style={{ color: "red" }}>
                        <small>Program start_date is required</small>
                      </p>
                    )}

                    <Form.Group
                      className="mb-3 mt-2"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Program End Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Program start date"
                        {...register("end_date", {
                          required: true,
                        })}
                        className="border border-dark rounded"
                      />
                    </Form.Group>
                    {errors.end_date && (
                      <p style={{ color: "red" }}>
                        <small>Program end date is required</small>
                      </p>
                    )}

                    <br></br>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        as="textarea"
                        rows="3"
                        placeholder="Program description"
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

                    <Form.Label>Program Course</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={`w-100 p-2 mt-3  ${
                        errors.course_id && (
                          <p style={{ color: "red" }}>
                            <small>{errors.course_id.message}</small>
                          </p>
                        )
                      }`}
                      {...register("course_id", {
                        required: "Program course is required",
                      })}
                    >
                      <option value="">Select Program Status</option>
                      <option value="1">Elevate</option>
                      <option value="2">Computer Science</option>
                    </Form.Select>
                    {errors.status && (
                      <p style={{ color: "red" }}>
                        <small>{errors.status.message}</small>
                      </p>
                    )}

                    <Form.Label>Program Status</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={`w-100 p-2 mt-3  ${
                        errors.status && (
                          <p style={{ color: "red" }}>
                            <small>{errors.status.message}</small>
                          </p>
                        )
                      }`}
                      {...register("status", {
                        required: "Program status is required",
                      })}
                    >
                      <option value="">Select Program Status</option>
                      <option value="1">Inprogress</option>
                      <option value="2">Closed</option>
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
            <Modal.Footer className="mt-2">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit(addNewProgram)}>
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

export default Programs;

{
  /* <Col md="12">
<Card>
  <Card.Header>
    <Card.Title as="h4">100 Awesome Nucleo Icons</Card.Title>
    <p className="card-category">
      Handcrafted by our friends from{" "}
      <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>
    </p>
  </Card.Header>
  <Card.Body className="all-icons">
    <Row>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-air-baloon"></i>
          <p>nc-air-baloon</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-album-2"></i>
          <p>nc-album-2</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-alien-33"></i>
          <p>nc-alien-33</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-align-center"></i>
          <p>nc-align-center</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-align-left-2"></i>
          <p>nc-align-left-2</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-ambulance"></i>
          <p>nc-ambulance</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-android"></i>
          <p>nc-android</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-app"></i>
          <p>nc-app</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-apple"></i>
          <p>nc-apple</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-atom"></i>
          <p>nc-atom</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-attach-87"></i>
          <p>nc-attach-87</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-audio-92"></i>
          <p>nc-audio-92</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-backpack"></i>
          <p>nc-backpack</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-badge"></i>
          <p>nc-badge</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-bag"></i>
          <p>nc-bag</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-bank"></i>
          <p>nc-bank</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-battery-81"></i>
          <p>nc-battery-81</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-bell-55"></i>
          <p>nc-bell-55</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-bold"></i>
          <p>nc-bold</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-bulb-63"></i>
          <p>nc-bulb-63</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-bullet-list-67"></i>
          <p>nc-bullet-list-67</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-bus-front-12"></i>
          <p>nc-bus-front-12</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-button-pause"></i>
          <p>nc-button-pause</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-button-play"></i>
          <p>nc-button-play</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-button-power"></i>
          <p>nc-button-power</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-camera-20"></i>
          <p>nc-camera-20</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-caps-small"></i>
          <p>nc-caps-small</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-cart-simple"></i>
          <p>nc-cart-simple</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-cctv"></i>
          <p>nc-cctv</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-chart-bar-32"></i>
          <p>nc-chart-bar-32</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-chart-pie-35"></i>
          <p>nc-chart-pie-35</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-chart-pie-36"></i>
          <p>nc-chart-pie-36</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-chart"></i>
          <p>nc-chart</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-chat-round"></i>
          <p>nc-chat-round</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-check-2"></i>
          <p>nc-check-2</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-circle-09"></i>
          <p>nc-circle-09</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-circle"></i>
          <p>nc-circle</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-cloud-download-93"></i>
          <p>nc-cloud-download-93</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-cloud-upload-94"></i>
          <p>nc-cloud-upload-94</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-compass-05"></i>
          <p>nc-compass-05</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-controller-modern"></i>
          <p>nc-controller-modern</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-credit-card"></i>
          <p>nc-credit-card</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-delivery-fast"></i>
          <p>nc-delivery-fast</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-email-83"></i>
          <p>nc-email-83</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-email-85"></i>
          <p>nc-email-85</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-explore-2"></i>
          <p>nc-explore-2</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-fav-remove"></i>
          <p>nc-fav-remove</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-favourite-28"></i>
          <p>nc-favourite-28</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-globe-2"></i>
          <p>nc-globe-2</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-grid-45"></i>
          <p>nc-grid-45</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-headphones-2"></i>
          <p>nc-headphones-2</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-html5"></i>
          <p>nc-html5</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-istanbul"></i>
          <p>nc-istanbul</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-key-25"></i>
          <p>nc-key-25</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-layers-3"></i>
          <p>nc-layers-3</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-light-3"></i>
          <p>nc-light-3</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-lock-circle-open"></i>
          <p>nc-lock-circle-open</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-map-big"></i>
          <p>nc-map-big</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-mobile"></i>
          <p>nc-mobile</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-money-coins"></i>
          <p>nc-money-coins</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-note-03"></i>
          <p>nc-note-03</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-notes"></i>
          <p>nc-notes</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-notification-70"></i>
          <p>nc-notification-70</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-palette"></i>
          <p>nc-palette</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-paper-2"></i>
          <p>nc-paper-2</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-pin-3"></i>
          <p>nc-pin-3</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-planet"></i>
          <p>nc-planet</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-preferences-circle-rotate"></i>
          <p>nc-preferences-circle-rotate</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-puzzle-10"></i>
          <p>nc-puzzle-10</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-quote"></i>
          <p>nc-quote</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-refresh-02"></i>
          <p>nc-refresh-02</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-ruler-pencil"></i>
          <p>nc-ruler-pencil</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-satisfied"></i>
          <p>nc-satisfied</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-scissors"></i>
          <p>nc-scissors</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-send"></i>
          <p>nc-send</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-settings-90"></i>
          <p>nc-settings-90</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-settings-gear-64"></i>
          <p>nc-settings-gear-64</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-settings-tool-66"></i>
          <p>nc-settings-tool-66</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-simple-add"></i>
          <p>nc-simple-add</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-simple-delete"></i>
          <p>nc-simple-delete</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-simple-remove"></i>
          <p>nc-simple-remove</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-single-02"></i>
          <p>nc-single-02</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-single-copy-04"></i>
          <p>nc-single-copy-04</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-spaceship"></i>
          <p>nc-spaceship</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-square-pin"></i>
          <p>nc-square-pin</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-stre-down"></i>
          <p>nc-stre-down</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-stre-left"></i>
          <p>nc-stre-left</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-stre-right"></i>
          <p>nc-stre-right</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-stre-up"></i>
          <p>nc-stre-up</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-sun-fog-29"></i>
          <p>nc-sun-fog-29</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-support-17"></i>
          <p>nc-support-17</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-tablet-2"></i>
          <p>nc-tablet-2</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-tag-content"></i>
          <p>nc-tag-content</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-tap-01"></i>
          <p>nc-tap-01</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-time-alarm"></i>
          <p>nc-time-alarm</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-tv-2"></i>
          <p>nc-tv-2</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-umbrella-13"></i>
          <p>nc-umbrella-13</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-vector"></i>
          <p>nc-vector</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-watch-time"></i>
          <p>nc-watch-time</p>
        </div>
      </Col>
      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
        <div className="font-icon-detail">
          <i className="nc-icon nc-zoom-split"></i>
          <p>nc-zoom-split</p>
        </div>
      </Col>
    </Row>
  </Card.Body>
</Card>
</Col> */
}
