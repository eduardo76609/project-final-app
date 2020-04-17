import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InicioSesion from "../pages/InicioSesion";
import Principal from "../pages/Principal";
import FormularioRegistro from "../pages/FormularioRegistro";
import Cursos from "../pages/Cursos";
import Acompanamiento from "../pages/Acompanamiento";
import Empleabilidad from "../pages/Empleabilidad";
import CursosDetalle from "../pages/CursosDetalle";
import EmpleosDetalle from "../pages/CursosDetalle";

import ConAutenticacion from "../utils/autenticacion/conAutenticacion";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/inicioSesion" component={InicioSesion} />
        <Route
          exact
          path="/formularioRegistro"
          component={FormularioRegistro}
        />
        <Route exact path="/acompanamiento" component={Acompanamiento} />
        <Route exact path="/empleos" component={Empleabilidad} />
        <Route
          exact
          path="/empleos/detalle"
          component={ConAutenticacion(EmpleosDetalle)}
        />
        <Route exact path="/cursos" component={Cursos} />
        <Route
          exact
          path="/cursos/detalle"
          component={ConAutenticacion(CursosDetalle)}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;