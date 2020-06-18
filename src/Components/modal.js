import React,{useState}from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


function ModalIngreso(props){
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
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Ingreso
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Correo electronico</Form.Label>
    <Form.Control type="email" placeholder="Ingresar Email" required/>
    <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
    <Form.Text className="text-muted">
      No compartiremos su correo con nadie.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Contraseña" required/>
    <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recordarme" />
  </Form.Group>
  <Button variant="success" type="button">
    Ingresar
  </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
    
}

export default ModalIngreso;