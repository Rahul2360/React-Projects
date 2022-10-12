import React from "react";
import Modal from "react-bootstrap/Modal";
import AddUser from "./add-user";

function AddUserModal(props) {
  return (
    <Modal
      backdrop="static"
      keyboard={false}
      size="lg"
      id="addUserModal"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      // centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create New User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddUser />
      </Modal.Body>
    </Modal>
  );
}

export default AddUserModal;
