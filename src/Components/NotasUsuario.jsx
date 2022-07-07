import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import {
  actionAddAgendaAsync,
  listAgendaAsync,
} from "../Redux/Actions/Comentarios";
import useForm from "../Components/Hooks/useForm";
import ListarNotas from "./ListarNotas";

const NotasUsuario = ({datos}) => {
  const dispatch = useDispatch();

  const { agendaCitas } = useSelector((store) => store.ComentariosReducer);
  console.log(agendaCitas); 

  const [formValue, handleInputChange, reset] = useForm({
    sintomas: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(actionAddAgendaAsync(formValue));
    reset();
  };

  useEffect(() => {
    dispatch(listAgendaAsync);
  }, [dispatch]);



  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{ margin: "5%", marginLeft: "10%", marginRight: "10%" }}
      >
        <h1 style={{ textAlign: "center", color: "blue" }}>
          Dejanos tu comentario
        </h1>
        <hr />
        {}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>¿Que tal el clima?</Form.Label>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formValue.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            name="sintomas"
            value={formValue.sintomas}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="submit" variant="info">
          Enviar
        </Button>
      </Form>
      <ListarNotas agendaCitas={agendaCitas} />
    </div>
  );
};

export default NotasUsuario;

/* agendaCitas.map((cita, index)=>(
  <h1>{cita.sintomas}</h1>
)) */
