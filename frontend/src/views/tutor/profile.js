import React,{useState, useEffect}from "react";
import { useForm } from "react-hook-form";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TutorProfile() {
  const {register,handleSubmit,reset,setValue,formState: { errors },} = useForm();
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [students,setStudents] = useState([]);
  const [studentId, setStudentId] = useState(0);
  const handleClose = () => setShow(false);
  const updateClose = () => setUpdate(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState(false);
  const [serverResponse, setServerResponse] = useState("");

 
  const showUpdateModal = (id) => {
    setUpdate(true);
    setTutorId(id);
    students.map((tutor) => {
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

  //updating tutor profile
  const updateTutorProfile = (data) => {
    showUpdateModal()
    console.log(data);
    if(data.password === data.confirm_password){

      const requestOptions = {
        method: "PUT",
       headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
       },
       body: JSON.stringify(data),
     };

     fetch(`/users/user/${tutorId}`, requestOptions)
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         
         const reload =window.location.reload()
         reload() 
       })
       .catch((err) => console.log(err));
    }else{
      alert("Passwords do not match");
    }
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <Form.Control
                          disabled
                          placeholder="Women In Tech Uganda"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Admin"
                          placeholder="Enter your first name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="WITU"
                          placeholder="Enter your first name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="email">Email address</label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="email">Contact</label>
                        <Form.Control
                          placeholder="Contact"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col md="6">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Kamokya"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
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

                   
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right mt-4 mb-3"
                    type="submit"
                    variant="info"
                    onClick={handleSubmit(updateTutorProfile)}
                  >
                    Update Profile
                  </Button>
           
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>

              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    ></img>
                    <h4 className="name">Witu Tutor</h4>
                  </a>
                </div>
                <p className="description text-center">admin@gmail.com</p>
                <p className="description text-center">Kamokya</p>
                <p className="description text-center">0751547654</p>
              </Card.Body>
              <hr></hr>

              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TutorProfile;
