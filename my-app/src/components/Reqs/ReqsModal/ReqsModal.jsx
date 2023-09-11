import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./ReqsModal.css";

export const ReqsModal = ({ closeModal, onSubmit, defaultValue}) => {

  const [formState, setFormState] = useState(
    defaultValue
  );


  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    onSubmit(formState);
    closeModal();
  };


  const handleClose = () => closeModal();

  
  return (
    <>
      <Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Requirement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          <div className="form-group">
            <label htmlFor="id">Requirement Name</label>
            <input name="id" onChange={handleChange} value={formState.id} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Requirement Type</label>
            <select
              name="type"
              onChange={handleChange}
              value={formState.type}
            >
              <option value="Functional">Functional</option>
              <option value="Non-Functional">Non-Functional</option>
            </select>
          </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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
