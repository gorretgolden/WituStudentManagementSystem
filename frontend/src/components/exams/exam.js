import React from "react";
import {Badge,Button,Card,Navbar,Nav,Table,Container,Row,Col,Pagination,Modal,} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";


const ViewStudentMarks = ({id,mark,student_id,course_unit_id, onClick, onDelete }) => {
  return (
   
       
            
            <tr>
              <td>{id}</td>
              <td>{mark}</td>
              <td>{course_unit_id}</td>
              <td>{student_id}</td>

             
              <td>
                <FontAwesomeIcon icon={faPencil} onClick={onClick} />
              </td>
              <td>
                <FontAwesomeIcon icon={faTrash} onClick={onDelete} />
              </td>
            </tr>
      
  );
};

export default ViewStudentMarks;
