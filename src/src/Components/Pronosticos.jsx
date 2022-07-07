import React from "react";
import { Card } from "react-bootstrap";

const Pronosticos = ({ prediccion, ciudad, showData, prox }) => {
  let iconUrl = "";
  let url = "";
  let iconUrl3 = "";
  let iconUrl6 = "";
  let iconUrl9 = "";
  let iconUrl12 = "";
  let iconUrl15 = "";

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + ciudad.weather[0].icon + ".png";

    iconUrl3 = url + prediccion.list[0].weather[0].icon + ".png";
    iconUrl6 = url + prediccion.list[2].weather[0].icon + ".png";
    iconUrl9 = url + prediccion.list[3].weather[0].icon + ".png";
    iconUrl12 = url + prediccion.list[4].weather[0].icon + ".png";
    iconUrl15 = url + prediccion.list[5].weather[0].icon + ".png";
  }
  return (
    <div className="col-md-12">
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Pronostico del tiempo</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            ciudad de {ciudad.name} {prox}
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
                <p>{prediccion.list[1].weather[0].description}</p>
              </div>
              <div>
                {" "}
                <h6>nueve Horas</h6>
                <img src={iconUrl9} alt={ciudad.name} />
                <p>{prediccion.list[2].weather[0].description}</p>
              </div>
              <div>
                {" "}
                <h6>doce Horas</h6>
                <img src={iconUrl12} alt={ciudad.name} />
                <p>{prediccion.list[3].weather[0].description}</p>
              </div>
              <div>
                {" "}
                <h6>Quince horas Horas</h6>
                <img src={iconUrl15} alt={ciudad.name} />
                <p>{prediccion.list[4].weather[0].description}</p>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pronosticos;
