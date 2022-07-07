import React, { useState } from "react";
import Form from "./Form";
import Tarjeta from "./Tarjeta";

const InfoWhater = () => {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=c05e1a13b24296641aa62c32170749f7&lang=es";
  let ciudad = "&q=";
  let cnt = '&cnt=6';
  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=c05e1a13b24296641aa62c32170749f7&lang=es";

  let urlDay =
    "api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}"

  const [actual, setActual] = useState([]);
  const [prediccion, setPrediccion] = useState([]);
  const [prediccion2, setPrediccion2] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [localizacion, setLocalizacion] = useState("");

  const getLocation = async (ciu) => {
    setLoading(true);
    setLocalizacion(ciu);

    /* tiempo real */
    const ciudadActualF = async () => {
      url = url + ciudad + ciu;
      console.log(url);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return setActual(data);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setShow(false);
      }
    };
     ciudadActualF(); 

     /* prediciones */

    const predicionF = async () => {
      try {
        urlForecast = urlForecast + ciudad + ciu;

        const response1 = await fetch(urlForecast);
        const data1 = await response1.json();
        console.log(data1);
        setLoading(false);
        setShow(true);
        return setPrediccion(data1);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setShow(false);
      }
    };
   predicionF(); 

   
  };

  return (
    <div>
      <Form ciudadActual={getLocation} />

      <Tarjeta
        showData={show}
        loadingData={loading}
        ciudad={actual}
        prediccion={prediccion}
      />
    </div>
  );
};

export default InfoWhater;

/*   await fetch(url)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((ciudadData) => {
        console.log(ciudadData);
        setActual(ciudadData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      }); */
