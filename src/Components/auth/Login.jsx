import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAsync, loginGoogle } from "../../Redux/Actions/actions";
import { useForm } from "../../useForm";

const Login = () => {
  const dispatch = useDispatch();

  const [formValue, handleInputChange, rest] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(loginAsync(email, password));
    rest();
  };
  return (
    <>
      <div
        id="template-bg-1"
        className="bg-image"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: '100%'
        }}
      >
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
          <div className="card p-4">
            <div className="d-flex justify-content-center">
             
            </div>
            <div className="card-header d-flex align-middle">
              <h3 className="text-warning mt-2 mx-auto">Iniciar sesión </h3>
            </div>
            <div className="card-body w-100">
              <form
                name="login"
                action=""
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="input-group form-group mt-3">
                  <div className="bg-warning rounded-start">
                    <span className="m-3">
                      <i className="fas fa-user mt-2"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="bg-warning rounded-start">
                    <span className="m-3">
                      <i className="fas fa-key mt-2"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="Acceder"
                    className="btn bg-warning float-end w-100"
                    name="login-btn"
                  />
                </div>
                <div className="mt-5 card-footer">
                  <hr className="my-4"></hr>
                  <button
                    className="btn btn-block btn-primary w-100 my-2"
                    style={{ backgroundColor: `#dd4b39` }}
                    type="submit"
                    onClick={() => dispatch(loginGoogle())}
                  >
                    <i className="fab fa-google me-2"></i> Loguearse con Google
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center">
                <Nav.Link className="text-warning" href="/register">
                  Registrarse
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
