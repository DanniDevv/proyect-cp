import React from "react";
import "./home.css";
import icono_primary from "../assets/img/icono_primary.png";
import icono_nosotros from "../assets/img/icono_nosotros.png";
import icono_redes from "../assets/img/icono_redes.png";
import icono_seguridad from "../assets/img/icono_seguridad.png";
import icono_energia from "../assets/img/icono_energia.png";
import icono_telecomunicaciones from "../assets/img/icono_telecomunicaciones.png";
import icono_contactanos from "../assets/img/icono_contactanos.png";
import icono_clientes from "../assets/img/icono_clientes.png";
import icono_trabajamos from "../assets/img/icono_trabajamos.png";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="container">
          {/* container left */}
          <div className="container-left">
            <div className="title">
              <h1>Corporacion de Contratistas y Proveedores</h1>
            </div>
            <div className="container-imagen">
              <img
                src={icono_primary}
                alt="ccip-logo"
                className="icon-primary"
              />
            </div>
          </div>
          {/* container right */}
          <div className="container-right">
            <div className="content">
              <div className="content-info">
                <div className="icon">
                  <img
                    src={icono_nosotros}
                    alt="icon-nosotros"
                    className="nosotros"
                  />
                </div>
                <div className="information">
                  <h2>Nosotros</h2>
                </div>
              </div>
              <div className="content-info">
                <div className="icon">
                  <img src={icono_redes} alt="icon-redes" className="redes" />
                </div>
                <div className="information">
                  <h2>Redes y Telemática</h2>
                </div>
              </div>
              <div className="content-info">
                <div className="icon">
                  <img
                    src={icono_seguridad}
                    alt="icon-seguridad"
                    className="seguridad"
                  />
                </div>
                <div className="information">
                  <h2>Seguridad Electronica</h2>
                </div>
              </div>
              <div className="content-info">
                <div className="icon">
                  <img
                    src={icono_energia}
                    alt="icon-energia"
                    className="energia"
                  />
                </div>
                <div className="information">
                  <h2>Energía Eléctrica</h2>
                </div>
              </div>
              <div className="content-info">
                <div className="icon">
                  <img
                    src={icono_telecomunicaciones}
                    alt="icon-telecomunicaciones"
                    className="telecomunicaciones"
                  />
                </div>
                <div className="information">
                  <h2>Telecomunicaciones</h2>
                </div>
              </div>
              <div className="content-info">
                <div className="icon">
                  <img
                    src={icono_contactanos}
                    alt="icon-contactanos"
                    className="contactanos"
                  />
                </div>
                <div className="information">
                  <h2>Contactanos</h2>
                </div>
              </div>
              <div className="content-info">
                <div className="icon">
                  <img
                    src={icono_clientes}
                    alt="icon-clientes"
                    className="clientes"
                  />
                </div>
                <div className="information">
                  <h2>Clientes</h2>
                </div>
              </div>
              <div className="content-info">
                <div className="icon">
                  <img
                    src={icono_trabajamos}
                    alt="icon-trabajamos"
                    className="trabajamos"
                  />
                </div>
                <div className="information">
                  <h2>Trabajamos con</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
