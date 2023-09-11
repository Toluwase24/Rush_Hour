import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./RiskModal.css";

export const RiskModal = ({ closeModal, onSubmit, defaultValue}) => {

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
          <Modal.Title>Add Risk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="name">Risk Name</label>
            <input name="name" onChange={handleChange} value={formState.name} />
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
            <label htmlFor="status">Risk Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="Unaddressed">Unaddressed</option>
              <option value="Mitigated">Mitigated</option>
              <option value="Eliminated">Eliminated</option>
            </select>
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
