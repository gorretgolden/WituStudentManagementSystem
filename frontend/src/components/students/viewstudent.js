import React from "react";
import {Badge,Button,Card,Navbar,Nav,Table,Container,Row,Col,Pagination,Modal,} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

const ViewStudentComponent = ({ id,last_name,first_name,onClick,email,contact,address,onDelete}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{last_name}</td>
      <td>{first_name}</td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{address}</td>

      <td>
        <Button >Enroll</Button>
      </td>
      <td>
        <FontAwesomeIcon icon={faEye}  />
      </td>
      <td>
        <FontAwesomeIcon icon={faPencil} onClick={onClick} />
      </td>
      <td>
        <FontAwesomeIcon icon={faTrash}   onClick={onDelete} />
      </td>
    </tr>
  );
};

export default ViewStudentComponent;
