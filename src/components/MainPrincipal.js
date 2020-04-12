import React from "react";
import cardempleo from "../images/cardempleo.png";
import cardcurso from "../images/cardcurso.png";
import cardacompanamiento from "../images/cardacompanamiento.png";
import { Link } from "react-router-dom";

const MainPrincipal = () => {
  return (
    <>
      <section className="container mt-5">
        <div className="card-group">
          <div className="card">
            <img
              src={cardcurso}
              className="card-img-top "
              alt="Image responsive"
            />
            <div className="card-body">
              <Link className="text-decoration-none text-secondary mb-4 h4" to="/Cursos">
                CURSOS
              </Link>
              <p className="card-text text-justify mt-2">
                En esta sección encontrarás cursos, de diferentes modalidades
                que están a tu disposición.{" "}
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={cardacompanamiento}
              className="card-img-top "
              alt="Image responsive"
            />
            <div className="card-body">
              <Link
                className="text-decoration-none text-secondary mb-4 h4"
                to="/Acompanamiento"
              >
                ACOMPAÑAMIENTO EMOCIONAL
              </Link>

              <p className="card-text text-justify mt-2">
                Aquí podrás acceder a citas de acompañamiento psicológico.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={cardempleo}
              className="card-img-top"
              alt="Image responsive"
            />
            <div className="card-body">
              <Link to='/Empleabilidad' className="text-decoration-none text-secondary mb-4 h4">EMPLEABILIDAD</Link>
              <p className="card-text text-justify mt-2">
                En esta sección podrá encontrar vacantes de empleo, afines a su
                experiencia o conocimientos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainPrincipal;
