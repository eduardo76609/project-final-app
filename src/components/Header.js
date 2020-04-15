import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import '../Style/all_app.css'

const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <img src={logo} className="rounded-circle z-depth-0"
            alt="avatar image" height="60" />
          <button className="navbar-toggler bg-dark ml-auto" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
            <span className="navbar-toggler-icon my-toggler"></span>
          </button>
          <div class="navbar-collapse collapse" id="collapsingNavbar2">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">

                <Link
                  className="colorTextLink h5 text-decoration-none"
                  to="/"
                >
                  Inicio
              </Link>
              </li>
              <li className="nav-item">

                <Link
                  className="colorTextLink h5 text-decoration-none"
                  to="/Cursos"
                ><i className="fas fa-book-reader"></i>{" "}
                  Cursos
              </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="colorTextLink h5 text-decoration-none"
                  to="/Acompanamiento"
                >
                  <i className="fab fa-accessible-icon"></i>{" "}
                  Acompañamiento
              </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Empleabilidad"
                  className="colorTextLink h5 text-decoration-none"
                >
                  <i className="fas fa-briefcase"></i>{" "}
                  Empleabilidad
              </Link>
              </li>
              <li className="colorTextLink  h5 text-decoration-none">
                <Link
                  to="/InicioSesion"
                  className="colorTextLink h5 text-decoration-none"
                >
                  <i className="fas fa-sign-in-alt"></i>{" "}
                  Iniciar Sesión
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Header;
