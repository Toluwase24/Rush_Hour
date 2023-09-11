import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./TimeModal.css";

export const TimeModal = ({ closeModal, onSubmit, defaultValue}) => {

  const [formState, setFormState] = useState(
    defaultValue
  );


  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    //send data to backend
    closeModal();
  };


  const handleClose = () => closeModal();

  
  return (
    <>
      <Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Work</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name">Team Member</label>
                <select name="name" onChange={handleChange} value={formState.name}>
                <option>-Choose Option-</option>
                <option value="Tim">Tim</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="req">Requirement</label>
              <select name="req" onChange={handleChange} value={formState.req}>
                <option>-Choose Option-</option>
                <option value="Make Bigger Ladders">Make Bigger Ladders</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="phase">Development Phase</label>
              <select name="phase" onChange={handleChange} value={formState.phase}>
                <option>-Choose Option-</option>
                <option value="Requirements Analysis">Requirements Analysis</option>
                <option value="Designing">Designing</option>
                <option value="Coding">Coding</option>
                <option value="Testing">Testing</option>
                <option value="Project Management">Project Management</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="period">Work Period</label>
              <select name="period" onChange={handleChange} value={formState.period}>
              <option>-Choose Option-</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="hours">Hours Worked</label>
              <input name="hours" onChange={handleChange} value={formState.hours || "0"} type="number" min="0" required/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="secondary" onClick={handleClose}>
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

/*
<Form noValidate validated={validated} onSubmit={handleSubmit}>


    <Row className="mb-3">
      <Form.Group as={Col} controlId="developmentPhase">
      <Form.Label>Development Phase</Form.Label>
        <Form.Select aria-label="Frequency Select">
            <option>-Select Development Phase-</option>
            <option value="Requirements Analysis">Requirements Analysis</option>
            <option value="Designing">Designing</option>
            <option value="Coding">Coding</option>
            <option value="Testing">Testing</option>
            <option value="Project Management">Project Management</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} className="mb-3" controlId="numHours">
        <Form.Label>Hours Worked (Rounded)</Form.Label>
        <Form.Control type="number" min="0" placeholder="0" />
      </Form.Group>
    </Row>

    <Row className="mb-3">
        <Button type="submit">Submit Work Hours</Button>
    </Row>
  </Form>*/