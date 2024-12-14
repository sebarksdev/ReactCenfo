import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "./Context/User";
import AuthLayout from "./Auth/Auth";

import Login from './Components/pages/Login';
import Home from './Components/pages/Home';
import ReservaCanchas from './Components/forms/ReservaCanchas';
import RegistroUsuario from './Components/forms/RegistroUsuario';
import Calendarios from './Components/pages/Calendarios';
import MostrarReservas from './Components/forms/MostrarReservas';
// import AcercaDe from './Components/pages/AcercaDe';
import Default from './Components/pages/Default';
import Layout from './Components/pages/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';


function App() {
  const { user } = useContext(UserContext);

  return (
    <div id="MainContainer">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<AuthLayout authenticated={user} />}>
            <Route path='registroUsuario' element={<RegistroUsuario />} />
            <Route path='reservaCanchas' element={<ReservaCanchas />} />
            <Route path='calendarios' element={<Calendarios />} />
            <Route path='mostrarReservas' element={<MostrarReservas />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Default />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
