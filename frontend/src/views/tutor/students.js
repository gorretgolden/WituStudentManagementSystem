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
import ViewStudentComponent from "components/students/viewstudent";
import TutorViewStudents from "components/tutors/student";

function TutorStudentList() {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [students,setStudents] = useState([]);
  const [studentId, setStudentId] = useState(0);
  const handleClose = () => setShow(false);
  const updateClose = () => setUpdate(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const {register,handleSubmit,reset,setValue,formState: { errors },} = useForm();
  let token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");
  

  //fetching all students
  useEffect(() => {
    fetch("/users/students")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudents(data);
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

  

  //fetch all students
  const getAllStudents = () => {
    fetch("/users/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => console.log(err));
  };


  

  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
           
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
   
           
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <TutorViewStudents
                
                        id={student.id}
                        last_name={student.last_name}
                        first_name={student.first_name}
                        email={student.email}
                        address={student.address}
                        contact={student.contact}
                        key={index}
                   
                      
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

     

      </Container>
    </>
  );
}

export default TutorStudentList;
