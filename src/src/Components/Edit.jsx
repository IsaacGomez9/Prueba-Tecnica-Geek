import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useForm } from "../useForm";
import { editCitaAsync } from "../Redux/Actions/Comentarios";

const Edit = ({ datos }) => {
  const dispatch = useDispatch();

  //-----------Activacion del Modal-----------------------------------//

  //-----------------cerrar----------------------  const handleClose = () => setShow(false);

  //-------------------Manipulación del Formulario y lograr Editar----------------------------//
  const [formValue, handleInputChange, reset] = useForm({
    sintomas: datos.sintomas,
    email: datos.email
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(editCitaAsync(formValue));
    handleClose();
    reset();
  };

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edita tu comentario </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tu comentario aquí !</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="sintomas"
                value={formValue.sintomas}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} onChange={handleShow} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;
