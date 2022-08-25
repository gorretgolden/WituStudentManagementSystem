import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
} from "react-bootstrap";

function StudentList() {
   
  const [students,setStudents] = useState([])

  useEffect(() => {
    fetch('/users/students')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setStudents(data)
    })
    .catch(error=>console.log(error))
  }, [])

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
          <Button className="float-right mb-2">
            <Link to="/students/new">
            Add New Student
            </Link>
          </Button>
          </Col>

          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Cohort 1 Students</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">First Name</th>
                      <th className="border-0">Last Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Contact</th>
                      <th className="border-0">Address</th>
                      <th className="border-0">View</th>
                      <th className="border-0">Edit</th>
                      <th className="border-0">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Gorret</td>
                      <td>Nabatanzi</td>
                      <td>gorretgolden</td>
                      <td>Mengo</td>
                      <td>0775774594</td>

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
                    <tr>
                      <td>1</td>
                      <td>Gorret</td>
                      <td>Nabatanzi</td>
                      <td>gorretgolden</td>
                      <td>Mengo</td>
                      <td>0775774594</td>

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
                    <tr>
                      <td>1</td>
                      <td>Gorret</td>
                      <td>Nabatanzi</td>
                      <td>gorretgolden</td>
                      <td>Mengo</td>
                      <td>0775774594</td>

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

          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Elevate</Card.Title>
              </Card.Header>

              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">First Name</th>
                      <th className="border-0">Last Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Contact</th>
                      <th className="border-0">Address</th>
                      <th className="border-0">View</th>
                      <th className="border-0">Edit</th>
                      <th className="border-0">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Gorret</td>
                      <td>Nabatanzi</td>
                      <td>gorretgolden</td>
                      <td>Mengo</td>
                      <td>0775774594</td>

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
                    <tr>
                      <td>1</td>
                      <td>Gorret</td>
                      <td>Nabatanzi</td>
                      <td>gorretgolden</td>
                      <td>Mengo</td>
                      <td>0775774594</td>

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
                    <tr>
                      <td>1</td>
                      <td>Gorret</td>
                      <td>Nabatanzi</td>
                      <td>gorretgolden</td>
                      <td>Mengo</td>
                      <td>0775774594</td>

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
      </Container>
    </>
  );
}

export default StudentList;
