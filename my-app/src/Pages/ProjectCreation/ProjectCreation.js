import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ProjectCreation() {

const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
};

return(
<div className='squat'>
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="projectName">
        <Form.Label>Project Name</Form.Label>
        <Form.Control required type="text" placeholder="Project name" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} controlId="projectOwnerManager">
        <Form.Label>Project Owner/Manager Name</Form.Label>
        <Form.Control required type="text" placeholder="Project Owner" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="projectDescription">
        <Form.Label>High-Level Project Description</Form.Label>
        <Form.Control required type="text" placeholder="Project Description" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Row>

    <Button type="submit">Submit Project</Button>
    <Button type="reset" variant="danger">Reset</Button>
  </Form>
</div>
)
}
