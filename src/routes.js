import React, {Fragment} from 'react'
import {Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import HomeView from './views/HomeView';
import DetailView from './views/DetailView';
/*import CarritoView from './views/CarritoView';*/
import DashboardView from './views/DashboardView';
import CrearNoticiaView from './views/CrearNoticiaView';
import EditarNoticiaView from './views/EditarNoticiaView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';


export default function routes() {
  return (
    <Fragment>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/detalle/:id" component={DetailView} />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/register" component={RegisterView} />

      <ProtectedRoute exact path="/admin/crearnoticia" component={CrearNoticiaView}/>
      <ProtectedRoute exact path="/admin/editarnoticia/:id" component={EditarNoticiaView}/>
      <ProtectedRoute exact path="/admin/dashboard" component={DashboardView} />
     
    </Fragment>
  )
}
