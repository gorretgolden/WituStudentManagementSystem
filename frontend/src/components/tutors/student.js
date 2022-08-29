import React from "react";
import {Badge,Button,Card,Navbar,Nav,Table,Container,Row,Col,Pagination,Modal,} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

const TutorViewStudents = ({ id,last_name,first_name,email,contact,address}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{last_name}</td>
      <td>{first_name}</td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{address}</td>

     
    </tr>
  );
};

export default TutorViewStudents;
