import React, { useState } from "react";

const Form = ({ ciudadActual }) => {
  const [ciudad, setCiudad] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ ciudad });
    if (ciudad === "" || !ciudad) return;
    ciudadActual(ciudad);
  };

  return (
    <div className="container w-75">
      <form className="" onSubmit={onSubmit}>
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Ciudad"
            onChange={(e) => setCiudad(e.target.value)}
          />
          <button className="btn btn-primary input-group-text" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
