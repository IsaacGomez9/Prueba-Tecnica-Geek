import React from "react";
import { useDispatch } from "react-redux";
import { registerAsync } from "../../Redux/Actions/actions";
import { useForm } from "../../useForm";

const Register = () => {
  const dispatch = useDispatch();

  const [formValue, handleInputChange, rest] = useForm({
    nombre: "",
    apellido: "",
    email: "",
    pass: "",
    conpass: "",
  });

  const { nombre, apellido, email, password, conpassword } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(registerAsync(email, password, nombre, apellido));
    rest();
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: '100%'
        }}
      >
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
          <div className="card p-4 ">
            <div className="card-header d-flex align-middle">
              <h3 className="text-warning mt-2 mx-auto">Registro </h3>
            </div>
            <div className="card-body w-200">
              <form onSubmit={handleSubmit} style={{ width: `400px` }}>
                <div className="input-group form-group mt-3">
                  <label for="nombre" className="text-warning mx-3">
                    Nombre
                    <input
                      type="text"
                      className="form-control mx-5"
                      placeholder="Nombre"
                      required
                      name="nombre"
                      id="nombre"
                      value={nombre}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="input-group form-group mt-3">
                  <label for="apellido" className="text-warning mx-3">
                    Apellido
                    <input
                      type="text"
                      className="form-control mx-5"
                      placeholder="Apellido"
                      required
                      name="apellido"
                      id="apellido"
                      value={apellido}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="input-group form-group mt-3">
                  <label for="email" className="text-warning mx-3">
                    Correo
                    <input
                      type="email"
                      className="form-control mx-5"
                      placeholder="usuario@gmail.com"
                      required
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="input-group form-group mt-3 ">
                  <label for="password" className="text-warning mx-3">
                    Contraseña
                    <input
                      type="password"
                      className="form-control mx-5"
                      placeholder="123"
                      required
                      name="password"
                      id="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="input-group form-group mt-3">
                  <label for="conpassword" className="text-warning mx-3">
                    Confirmar Contraseña
                    <input
                      type="password"
                      className="form-control mx-5"
                      placeholder="Repita contraseña"
                      required
                      name="conpassword"
                      id="conpassword"
                      value={conpassword}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-group mt-5">
                  <input
                    type="submit"
                    value="Registrarse"
                    className="btn bg-warning float-end w-100"
                    name="login-btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
