import React, { useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { useForm } from "../useForm";

const Perfil = () => {
  const dispatch = useDispatch();

  const [formValue, handleInputChange, rest] = useForm({
    displayName: "  ",
    photoURL: "",
    password: "",
  });

  const { displayName, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const auth = getAuth();
  const user = auth.currentUser;
  if (user != null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  }
  console.log(user.photoURL);
  return (
    <div className="bg-dark text-center ">
      <Card style={{ width: "70rem" }} className="m-auto">
        <div className="container w-25 mt-3  ">
          <h1 className="text-center mt-3">Información de usuario</h1>
          <div className="text-center">
            <img
              src={user?.photoURL}
              alt=""
              className="mt-5"
              style={{ borderRadius: "30px" }}
            ></img>
          </div>
          <div className="text-center mt-3">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name </Form.Label>
                <Form.Control
                  id="standard-basic"
                  label="Nombre"
                  name="displayName"
                  autoComplete="off"
                  defaultValue={user.displayName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  id="standard-basic"
                  label="Correo electrónico"
                  margin="dense"
                  name="email"
                  disabled
                  defaultValue={user.email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Actualizar contraseña </Form.Label>
                <Form.Control
                  id="standard-basic"
                  label="Actualizar Contraseña"
                  margin="dense"
                  name="password"
                  autoComplete="off"
                  value={password}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button type="submit">Actualizar Contraseña</Button>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Perfil;
