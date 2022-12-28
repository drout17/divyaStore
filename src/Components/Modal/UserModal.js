import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UserModal = (props) => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
   // const handleShow = () => setShow(true);

    return(
        <>
        <Modal show={show} size='sm' centered={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='d-flex flex-column justify-content-center'>
                <label className="pt-2"><b>User Name</b></label>
                <input className="form-control px-2 text-center" type="text" placeholder="User Name"/>
                <label className="pt-2 font-weight-bold"><b>Password</b></label>
                <input className="form-control text-center" type="password"/>
            </div>
        </Modal.Body>
        <Modal.Footer style={{justifyContent:"center"}}>
          <Button variant="secondary" onClick={handleClose}>
            Login
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}


export default UserModal;