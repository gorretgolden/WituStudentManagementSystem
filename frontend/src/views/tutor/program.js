import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import {Badge,Button,Card,Navbar,Nav,Table,Container,Row,Col,Pagination,Modal,Form,} from "react-bootstrap";
import { useForm } from "react-hook-form";

function TutorPrograms() {
  //constants
  const [show, setShow] = useState(false);
  const [programs, setPrograms] = useState([]);
  const handleClose = () => setShow(false);
  const [message, setMessage] = useState(false);
  const [serverResponse, setServerResponse] = useState("");
  const {register,handleSubmit,reset,watch,formState: { errors }} = useForm();
  let token=localStorage.getItem('REACT_TOKEN_AUTH_KEY')


  //fetching all programs
  useEffect(() => {
    fetch("/programs/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPrograms(data);
      });
  }, []);

  //mapping through the response
  const programlists = programs.map((program) => (
    <tr key={program.id}>
      <td>{program.id}</td>
      <td>{program.name}</td>
      <td>{program.start_date}</td>
      <td>{program.end_date}</td>


    </tr>
  ));

  


  //get all programs
  const getAllPrograms=()=>{
    fetch('/programs')
    .then(res => res.json())
    .then(data => {
        setPrograms(data)
    })
    .catch(err => console.log(err))
}


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
                      <th className="border-0">Start Date</th>
                      <th className="border-0">End Date</th>
                    
                    </tr>
                  </thead>
                  <tbody>{programlists}</tbody>
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

export default TutorPrograms;


