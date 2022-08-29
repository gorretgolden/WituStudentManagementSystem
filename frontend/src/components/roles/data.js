// import React from 'react'

// export default function RoleData({show,onHide}) {
//   return (
  
//     <Modal show={show} onHide={handleClose}>
//     <Modal.Header>
//       {message ? (
//         <>
//           <div
//             className="alert alert-success alert-dismissible fade show"
//             role="alert"
//           >
//             <strong>{serverResponse}</strong>
//             <button
//               type="button"
//               className="close"
//               data-dismiss="alert"
//               aria-label="Close"
//             >
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//         </>
//       ) : (
//         <Modal.Title className="font-weight-bold">
//           Add New Role
//         </Modal.Title>
//       )}
//     </Modal.Header>
//     <Modal.Body>
//       <Row>
//         <Col md="12" xs="12" className=" align-items-center">
//           <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter role name"
//                 {...register("name", {
//                   required: true,
//                   maxLength: 10,
//                 })}
//                 className="border border-dark rounded"
//               />

//               {errors.name && (
//                 <p style={{ color: "red" }}>
//                   <small>role name is required</small>
//                 </p>
//               )}
//               {errors.name?.type === "maxLength" && (
//                 <p style={{ color: "red" }}>
//                   <small>
//                     role name should be more than 10 characters
//                   </small>
//                 </p>
//               )}
//             </Form.Group>
//           </Form>
//         </Col>
//       </Row>
//     </Modal.Body>
//     <Modal.Footer>
//       <Button variant="secondary" onClick={handleClose}>
//         Close
//       </Button>
//       <Button variant="primary" onClick={handleSubmit(addNewRole)}>
//         Save
//       </Button>
//     </Modal.Footer>
//   </Modal>
//   )
// }
