import React from "react";
import { Card, Button } from "react-bootstrap";
import Pronosticos from "./Pronosticos";
import Pronosticos2 from "./Pronosticos2";
import Spinner from "./Spinner";

const Tarjeta = ({ showData, loadingData, ciudad, prediccion }) => {
  let url = "";
  let iconUrl = "";
  url = "http://openweathermap.org/img/w/";

  let iconUrl3 = "";
  let iconUrl6 = "";
  let iconUrl9 = "";
  let iconUrl12 = "";
  let iconUrl15 = "";

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + ciudad.weather[0].icon + ".png";

    iconUrl3 = url + prediccion.list[0].weather[0].icon + ".png";
    iconUrl6 = url + prediccion.list[2].weather[0].icon + ".png";
    iconUrl9 = url + prediccion.list[3].weather[0].icon + ".png";
    iconUrl12 = url + prediccion.list[4].weather[0].icon + ".png";
    iconUrl15 = url + prediccion.list[5].weather[0].icon + ".png";
  }

  const HandelSubmitLocal = () => {
    const local = ciudad;
    localStorage.setItem("ciudad", JSON.stringify(local));
  };

  return (
    <div className="mt-5">
      {showData === true ? (
        <div className="container">
          <div className=" mb-3 mx-auto">
            <div className="row g-0">
              <div className="col-md-12">
                <Card style={{ width: "100%", borderRadius: "10px" }}>
                  <Card.Body>
                    <Card.Title>{ciudad.name}</Card.Title>
                    <Card.Text style={{ fontSize: "1rem" }}>
                      TEMPERATURA: {(ciudad.main.temp - 273.15).toFixed(1)}°C |{" "}
                      HUMEDAD: {ciudad.main.humidity}% | VISIVILIDAD:{" "}
                      {ciudad.visibility} M | PRESION: {ciudad.main.pressure} mb
                    </Card.Text>
                    <Card.Text>
                      <img src={iconUrl} alt={ciudad.name} />
                      {ciudad.weather[0].description}
                    </Card.Text>
                    <hr />
                    <Button
                      className="btn"
                      href={`/info/${ciudad.name}`}
                      onClick={HandelSubmitLocal}
                    >
                      More Info
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row g-0 mt-3">
              <Pronosticos
                prediccion={prediccion}
                ciudad={ciudad}
                showData={showData}
                prox="para las proximas horas"
              />
            </div>
            <div className="row g-0 mt-3">
              <Pronosticos2
                prediccion={prediccion}
                ciudad={ciudad}
                showData={showData}
                prox="Para el siguente dia"
              />
            </div>
          </div>
        </div>
      ) : (
        <h3>Ingrese los datos de nuevo</h3>
      )}
    </div>
  );
};

export default Tarjeta;

/* <div className="col-md-12">
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title>Pronostico del tiempo</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      ciudad de {ciudad.name} para los proximas horas
                    </Card.Subtitle>
                    <Card.Text>
                      <div className="d-flex justify-content-around">
                        <div key={ciudad.name}>
                          {" "}
                          <h6>Tres Horas</h6>
                          <img src={iconUrl3} alt={ciudad.name} />
                          <p>{prediccion.list[0].weather[0].description}</p>
                        </div>
                        <div>
                          {" "}
                          <h6>seis Horas</h6>
                          <img src={iconUrl6} alt={ciudad.name} />
                          <p>{prediccion.list[0].weather[0].description}</p>
                        </div>
                        <div>
                          {" "}
                          <h6>nueve Horas</h6>
                          <img src={iconUrl9} alt={ciudad.name} />
                          <p>{prediccion.list[0].weather[0].description}</p>
                        </div>
                        <div>
                          {" "}
                          <h6>doce Horas</h6>
                          <img src={iconUrl12} alt={ciudad.name} />
                          <p>{prediccion.list[0].weather[0].description}</p>
                        </div>
                        <div>
                          {" "}
                          <h6>Quince horas Horas</h6>
                          <img src={iconUrl15} alt={ciudad.name} />
                          <p>{prediccion.list[0].weather[0].description}</p>
                        </div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div> */
