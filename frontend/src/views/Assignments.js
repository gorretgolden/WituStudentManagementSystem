import React from "react";
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
} from "react-bootstrap";

function Assignments() {

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
          <Button className="float-right mb-2">Upload New Assignment</Button>
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
      
                      <th className="border-0">View</th>
                      <th className="border-0">Edit</th>
                      <th className="border-0">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Computer Science</td>
                      <td>Programming</td>
                      <td>2years</td>
               
              
            

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
                      <td>Computer Science</td>
                      <td>Programming</td>
                      <td>2years</td>

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

export default Assignments;
