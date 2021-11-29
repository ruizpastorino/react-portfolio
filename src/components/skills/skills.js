import React from "react";

const Skills = () => {
  return (
    <>
      <h3 className="strong-text text-center mb-5">Desarrollo Web</h3>
      <article className="bg-secondary p-5 rounded">
        <div className="row flex-wrap">
          <div className="p-2 col-12 col-lg-3">
            <h2 className="strong-text display-6 text-break">Mis Herramientas</h2>
            <p>
              Desde el diseño y creación de una Web o Aplicacion hasta su puesta en marcha cubro
              cada paso, siendo La suite de Adobe la herramienta principal en el diseño inicial y
              creación contenidos. Para desarrollo de Front End o Interfaz de Usuario me especializo
              en el uso de React y sus librerias, y en lo que respecta al Back End me destaco en la
              creación de Bases de Datos NoSQL con herramienas como MongoDB o Firebase de Google.
            </p>
          </div>
          <div className="col-12 col-lg-9">
            <h5 className="strong-text text-primary text-center">
              MERN <span>STACK</span>
            </h5>
            <canvas id="skills-chart"> </canvas>
            <p className="font-italic text-center mt-3 text-secondary">
              Porcentaje de dominio de Cada Tenologia
            </p>
          </div>
        </div>
      </article>
      <article className="my-5">
        <div className="row justify-content-center">
          <div className="chart-doughnut-container">
            <canvas id="reactnative-chart"></canvas>
            <h5>60%</h5>
            <label>React Native</label>
          </div>
          <div className="chart-doughnut-container">
            <canvas id="electron-chart"></canvas>
            <h5></h5>
            <label>Electron JS</label>
          </div>
          <div className="chart-doughnut-container">
            <canvas id="firebase-chart"></canvas>
            <h5></h5>
            <label>Firebase</label>
          </div>
          <div className="chart-doughnut-container">
            <canvas id="html-chart"></canvas>
            <h5></h5>
            <label>HTML</label>
          </div>
          <div className="chart-doughnut-container">
            <canvas className="prueba" id="css-chart"></canvas>
            <h5></h5>
            <label>CSS</label>
          </div>
          <div className="chart-doughnut-container">
            <canvas id="bootstrap-chart"></canvas>
            <h5></h5>
            <label>BOOSTRAP</label>
          </div>
          <div className="chart-doughnut-container">
            <canvas id="js-chart"></canvas>
            <h5></h5>
            <label>Javascript</label>
          </div>
          <div className="chart-doughnut-container">
            <canvas id="photoshop-chart"></canvas>
            <h5></h5>
            <label>Photoshop</label>
          </div>
          <div className="chart-doughnut-container">
            <canvas id="3D-chart"></canvas>
            <h5></h5>
            <label>Diseño 3D</label>
          </div>
          <div className="chart-doughnut-container">
            <canvas id="english-chart"></canvas>
            <h5></h5>
            <label>Ingles</label>
          </div>
        </div>
      </article>
    </>
  );
};

export default Skills;
