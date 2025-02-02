import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Signup for membership
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup for Monty membership</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label className='form-label'>Email Address:  </label>
            <input className='form-control' name="" type="email"></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example