import image from '../media/head-plants.png'

import React from "react";

const Cover = () => {
  return (
    <div className="cover-container w-100">
      <div className="center-xy col-6 p-3">
        <div className="position-relative center-xy col-12 col-md-6">
          <img src={image} alt="" />
          <span className="bg-primary circle-image-big"></span>
        </div>
      </div>
      <div className="p-4 col-12 col-md-6 col-lg-6">
        <h5 className="p-1 font-weight-bold bg-light d-inline text-dark rounded">
          Agustin Ruiz P.
        </h5>
        <h3 className="cover-title strong-text text-break">
          Full<span className="text-danger">Stack</span>
        </h3>
        <h3 style={{ marginTop: "-10%" }} className="cover-title strong-text text-break">
          <span className="text-danger">Dev</span>eloper
        </h3>
        <p className="my-4 col-12 col-md-12 col-lg-9 p-0">
          Bienvenidos a mi portfolio, Me llamo Agustín Ruiz, soy
          <span className="text-primary font-weight-bold"> Editor en Abobe Photoshop </span> y
          <span className="text-primary font-weight-bold">Desarrollador Web freelancer</span> con
          orientación al Stack MERN. Diseño y creo aplicaciones Web, de escritorio y móviles a
          medida pensadas y enfocadas al usuario.
        </p>
        <div>
          <button className="px-4 btn-danger btn btn-pink mr-2">About Me</button>
          <button className="px-4 btn btn-light">Contacto</button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
