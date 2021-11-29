import React from "react";

const Samples = () => {
  return (
    <article className="my-5">
      <h3 className="text-center mb-5 strong-text">PortFolio</h3>
      <div className="row p-0 my-5">
        <div className="col-12 col-lg-4">
          <h5 className="m-0">Jugando con</h5>
          <h2 className="strong-text m-0">React JS</h2>
          <p className="mb-3">
            Para poner a prueba mi creatividad y capacidad a la hora de trabajar con React tome
            inspiración en un clásico de los video juegos y desarrolle esta App Web que simula el
            mismo. Al igual que el juego es posee parámetros configurables mientras que los turnos y
            handicap se dan de manera aleatoria.
          </p>
          <a href="https://toys-fight.netlify.app" target="blank">
            <i className="fas fa-play mr-3"></i>Abrir enlace
          </a>
        </div>
        <div className="col-12 col-lg-8 p-3">
          <img className="w-100" src="./media/toys-fight.png" alt="toys-fght" />
        </div>
      </div>
      <div className="row revertible-row p-0 my-5">
        <div className="col-12 col-lg-6">
          <h5 className="m-0">Mi emprendimiento</h5>
          <h2 className="strong-text">MonkeyBeat</h2>
          <p className="display-7 mb-3">
            Sitio Web de mi emprendimiento tecnológico que muestra mi capacidad y creatividad,
            diseñado en React JS con base de datos en Firebase, integrado con Mercado Pago y
            administrado desde de una aplicación de escritorio. La página actualmente se encuentra
            en desarrollo mientras también generan nuevos contenidos visuales, productos y material
            para tutoriales e instructivos.
          </p>
          <a href="https://toys-fight.netlify.app" target="blank">
            <i className="fas fa-play mr-3"></i>Abrir enlace
          </a>
        </div>
        <div className="col-12 col-lg-6 p-3">
          <img className="w-100" src="./media/monkeybeat-instructivos.jpg" alt="toys-fght" />
        </div>
      </div>
    </article>
  );
};

export default Samples;
