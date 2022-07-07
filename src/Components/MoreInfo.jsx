import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import NotasUsuario from "./NotasUsuario";

const MoreInfo = () => {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=c05e1a13b24296641aa62c32170749f7&lang=es";
  let ciudad = "&q=";

  const navigate = useNavigate();
  const { name } = useParams();
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const ciudadActualF = async () => {
      url = url + ciudad + name;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return setDatos(data);
      } catch (e) {
        console.log(e);
      }
    };
    ciudadActualF();
  }, []);

  const handleChange = () => {
    navigate("/home");
  };

  return (
    <div className="container  ">
      <div className="mb-3 mx-auto mt-5 ">
        <Card style={{ width: "100%" }} className="text-center">
          <Card.Body>
            <Card.Title>{datos.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Condiciones meteorologicas :
            </Card.Subtitle>

            <div className="d-flex justify-content-around">
              <div className="card p-3 " key={datos?.name}>
                <h4>Temperatura</h4>
                <p>
                  Temperatura Actual: {(datos?.main?.temp - 273.15).toFixed(1)}
                  °C
                </p>
                <p>
                  Temperatura Maxima:{" "}
                  {(datos?.main?.temp_max - 273.15).toFixed(1)}°C
                </p>
                <p>
                  Temperatura Minima:{" "}
                  {(datos?.main?.temp_min - 273.15).toFixed(1)}°C
                </p>
              </div>
              <div className="card p-3">
                <h4>Variables de entorno</h4>
                <p>Humedad : {datos?.main?.humidity} %</p>
                <p>Presion : {datos?.main?.pressure} mb</p>
                <p>Visibilidad :{datos?.visibility} Metros</p>
              </div>
              <div className="card p-3">
                <h4>Otros</h4>
                <p>Presion : {datos?.main?.pressure} mb</p>
                <p>Visibilidad :{datos?.visibility} Metros</p>
                <p>Velocidad dle viento : {datos?.wind?.speed} m/s</p>
              </div>
            </div>
            <Button className="w-25 m-auto mt-3" onClick={handleChange}>
              Atras
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div>
        <NotasUsuario datos={datos}/>
      </div>
    </div>
  );
};

export default MoreInfo;
