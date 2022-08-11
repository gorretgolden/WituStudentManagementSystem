import React from "react";
import { Form, Button, Alert } from "react-bootstrap";




const Roles = ({id,name}) => {
 return(
    <>
     <Form.Group>
    <Form.Label>Roles</Form.Label>
    <Form.Select aria-label="Default select example">
      <option key={id}>{name}</option>
    </Form.Select>
  </Form.Group>
    </>
 )
};

export default Roles
