import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Bio from './containers/Bio/Bio';
import Equipo from './containers/Equipo/Equipo';

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/equipo" element={<Equipo />} />
        </Routes>

        <footer>© Todos Derrechos Reseverados, DESTILADO FILMS</footer>
      </div>
    </Router>
  );
}

export default App;
