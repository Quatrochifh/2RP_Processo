import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Pages/home';
import Cadastro from './Pages/cadastro';
import MeuPerfil from './Pages/perfil';
import Perfil from './Pages/todosusu';
import EditarUsuario from './Pages/editarUsu';

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Cadastro" element={<Cadastro />} /> 
        <Route path="/MeuPerfil" element={<MeuPerfil />} /> 
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/EditarUsuario" element={<EditarUsuario />} />  
      </Routes>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));