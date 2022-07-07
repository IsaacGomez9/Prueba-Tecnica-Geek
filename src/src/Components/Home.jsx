import React from "react";
import Form from "./Form";
import InfoWhater from "./InfoWhater";


const Home = () => {
  return (
    <div className="div">
      <div className="container text-center w-75">
        <h1 className="mt-1">Pronostico del tiempo</h1>
        <hr />
         <InfoWhater/>
      </div>
    </div>
  );
};

export default Home;
