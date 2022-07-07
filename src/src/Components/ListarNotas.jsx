import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteComentario, listAgendaAsync, listAgendarSync } from "../Redux/Actions/Comentarios";
import Edit from "./Edit";
const ListarNotas = ({ agendaCitas }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState([]);
  const handleDelete = (email) => {
    alert(`Su comentario se eliminara ${email}`);
    dispatch(deleteComentario(email));
  };

  const handleEditar = (item) => {
    setModal(true);
    setDatos(item);
  };

  useEffect(() => {
    dispatch(listAgendaAsync())
  }, [dispatch]);

  return (
    <div className="container ">
      <div>
        <h4>Comentarios:</h4>
        {agendaCitas?.map((item, index) => (
          <div className="mt-5" key={index}>
            <Card>
              <Card.Header>Comentarios Usuario : {item.email} </Card.Header>
              <Card.Body>
                <Card.Text>
                  <h5>{item.sintomas}</h5>
                </Card.Text>
                <div className=" text-center">
                  {" "}
                  <Button className="me-3" onClick={() => handleEditar(item)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(item.email)}>
                    Eliminar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
        {modal === true ? <Edit datos={datos} /> : ""}
      </div>
    </div>
  );
};

export default ListarNotas;
