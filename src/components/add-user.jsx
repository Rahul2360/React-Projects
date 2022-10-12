import React, { useState } from "react";
import "./common.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Spinner from 'react-bootstrap/Spinner';

function AddUser(props) {
  const mockDataUrl = "https://reqres.in/api/users";
  const [validated, setValidated] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const [userField, setUserField] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const inputsHandler = (e) => {
    setUserField((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const isValidEmail = (email) => {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const submitButton = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
    }
    setValidated(true);
    if (
      userField.first_name !== "" &&
      userField.last_name !== "" &&
      isValidEmail(userField.email)
    ) {
      setFormSubmit(true);
      saveUserDetail();
    }
  };

  const saveUserDetail = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userField),
    };
    fetch(mockDataUrl, requestOptions)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return response.json()
      })
      .then((data) => {
        setshowAlert(true);
        setUserField({
          first_name: "",
          last_name: "",
          email: "",
        });
        setValidated(false);
        setFormSubmit(false);
        setTimeout(() => {
          setshowAlert(false);
        }, 5000);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <>
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setshowAlert(false)}
          dismissible
        >
          User created sucessfully
        </Alert>
      )}
      <Form className="p-2" validated={validated} onSubmit={submitButton}>
        <Row>
          <Col>
            <Form.Group className="mb-2">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                id="firstName"
                placeholder="Enter first name"
                onChange={inputsHandler}
                value={userField.first_name}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide first name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                id="lastName"
                placeholder="Enter last name"
                onChange={inputsHandler}
                value={userField.last_name}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={inputsHandler}
            value={userField.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a email.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          disabled={formSubmit}
          className="float-right"
          type="button"
          id="saveUserDetails"
          onClick={submitButton}
        >
           {formSubmit && <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />}
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddUser;
