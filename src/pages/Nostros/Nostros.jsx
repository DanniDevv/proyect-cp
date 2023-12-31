import React from "react";
import "./nosotros.css";
import icono_nosotros from "../assets/img/icono_nosotros.png";

function Nosotros() {
  return (
    <>
      <div className="nosotros-general">
        <div className="nosotros-container">
          {/* Title and Icon Container */}
          <div className="title-icon-container">
            {/* Title */}
            <div className="nosotros-title">
              <h1>Nosotros</h1>
            </div>

            {/* Icon */}
            <div className="container-img">
              <img
                src={icono_nosotros}
                alt="icon-nosotros"
                className="icon-nosotros"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-mision-vison">
        <div className="container-mision">
          <div className="title-mision">
            <h2>Misión</h2>
          </div>
          <div className="info-mision">
            <p>
              Buscar soluciones a medida, aplicando el conocimiento, tecnología
              y experiencia, alineados a los objetivos de nuestros socios.
            </p>
          </div>
        </div>
        <div className="container-vision">
          <div className="title-vision">
            <h2>Visión</h2>
          </div>
          <div className="info-vision">
            <p>
              Ofrecer la mejor experiencia de innovación y tecnología ayudando a
              lograr una mejor eficiencia en sus procesos.
            </p>
          </div>
        </div>
        <a href="/">Home</a>
      </div>
    </>
  );
}

export default Nosotros;
