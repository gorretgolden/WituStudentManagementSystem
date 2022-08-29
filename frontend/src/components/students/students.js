import React from "react";
import { Container } from "react-bootstrap";

const AddStudent = () => {
  return (
    <Container>
      <Rol>
        <Col>
          <Form>
            <br></br>
            {/* first_name */}
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student first name"
                {...register("first_name", {
                  required: true,
                  maxLength: 25,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.first_name && (
                <p style={{ color: "red" }}>
                  <small>
                    First name is required and should not have numbers, space or
                    characters
                  </small>
                </p>
              )}
              {errors.first_name?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>First_name should be 25 characters</small>
                </p>
              )}
            </Form.Group>

            {/* last_name */}
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student last name"
                {...register("last_name", {
                  required: true,
                  maxLength: 25,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />

              {errors.last_name && (
                <p style={{ color: "red" }}>
                  <small>
                    Last name is required and should not have numbers, space or
                    characters
                  </small>
                </p>
              )}
              {errors.last_name?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Last name should be 25 characters</small>
                </p>
              )}
            </Form.Group>

            {/* dob */}
            <Form.Group className="mb-3">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter student date of birht"
                {...register("dob", {
                  required: true,
                })}
              />

              {errors.last_name && (
                <p style={{ color: "red" }}>
                  <small>Student's date of birth is required</small>
                </p>
              )}

              {/* email */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter student's  email address"
                {...register("email", { required: true, maxLength: 25 })}
              />

              {errors.email && (
                <p style={{ color: "red" }}>
                  <small>Student email address is required</small>
                </p>
              )}
              {errors.email?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Email should be 25 characters</small>
                </p>
              )}
            </Form.Group>

            {/* location */}
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student's address"
                {...register("address", {
                  required: true,
                  maxLength: 25,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.address && (
                <p style={{ color: "red" }}>
                  <small>
                    Student address is required and should not have numbers,
                    space or characters
                  </small>
                </p>
              )}
              {errors.address?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>address should be 25 characters</small>
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter student's contact"
                {...register("contact", { required: true, maxLength: 25 })}
              />
              {errors.contact && (
                <p style={{ color: "red" }}>
                  <small>Student contact is required</small>
                </p>
              )}
              {errors.contact?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>contact should be 10 characters</small>
                </p>
              )}
            </Form.Group>

            {/* guardian name */}
            <Form.Group className="mb-3">
              <Form.Label>Guardian Name</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter student's guardian name"
                {...register("guardian_name", {
                  required: true,
                  maxLength: 25,
                })}
              />
              {errors.contact && (
                <p style={{ color: "red" }}>
                  <small>The student's guardian name is required</small>
                </p>
              )}
              {errors.contact?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>Guardian name should not be 25 characters more</small>
                </p>
              )}
            </Form.Group>

            {/* guardian contact */}
            <Form.Group className="mb-3">
              <Form.Label>Guardian Contact</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter student's guardian contact"
                {...register("guardian_contact", {
                  required: true,
                  maxLength: 25,
                })}
              />
              {errors.guardian_contact && (
                <p style={{ color: "red" }}>
                  <small>The student's guardian contact is required</small>
                </p>
              )}
              {errors.guardian_contact?.type === "maxLength" && (
                <p style={{ color: "red" }}>
                  <small>
                    Guardian contact should not be 25 characters more
                  </small>
                </p>
              )}
            </Form.Group>

            {/* guardian relationship */}

            <Form.Select
              aria-label="Default select example"
              className={`w-100 p-2 mt-3  ${
                errors.guardian_relationship && (
                  <p style={{ color: "red" }}>
                    <small>{errors.guardian_relationship.message}</small>
                  </p>
                )
              }`}
              {...register("guardian_relationship", {
                required: "Guardian Relationship is required",
              })}
            >
              <option value="">Select Student Guardian Relationship</option>
              <option value="1">Mother</option>
              <option value="2">Father</option>
              <option value="3">Guardian</option>
              <option value="4">Sister</option>
              <option value="5">Brother</option>
            </Form.Select>
            {errors.guardian_relationship && (
              <p style={{ color: "red" }}>
                <small>{errors.guardian_relationship.message}</small>
              </p>
            )}

            {/* programmes */}
            <Form.Select
              aria-label="Default select example"
              className={`w-100 p-2 mt-3  ${
                errors.program_id && (
                  <p style={{ color: "red" }}>
                    <small>{errors.program_id.message}</small>
                  </p>
                )
              }`}
              {...register("program_id", {
                required: "A student program is required",
              })}
            >
              <option value="">Select Student Program</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            {errors.program_id && (
              <p style={{ color: "red" }}>
                <small>{errors.program_id.message}</small>
              </p>
            )}

            {/* student role */}
            <Form.Select
              aria-label="Default select example"
              className={`w-100 p-2 mt-3  ${
                errors.role_id && (
                  <p style={{ color: "red" }}>
                    <small>{errors.role_id.message}</small>
                  </p>
                )
              }`}
              {...register("role_id", { required: "Student role is required" })}
            >
              <option value="">Select the student role</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            {errors.role_id && (
              <p style={{ color: "red" }}>
                <small>{errors.role_id.message}</small>
              </p>
            )}

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

            <Button
              variant="primary"
              type="submit"
              className=" btn-lg btn-block"
              onClick={handleSubmit(addUser)}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Rol>
    </Container>
  );
};
