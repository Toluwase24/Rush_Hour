import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./TeamMemberModal.css";

export const TeamMemberModal = ({ closeModal, onSubmit, defaultValue}) => {

  const [formState, setFormState] = useState(
    defaultValue
  );


  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    closeModal();
  };


  const handleClose = () => closeModal();

  
  return (
    <>
      <Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input name="name" onChange={handleChange} value={formState.name} required/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button type = "submit" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

};
